package com.k9c202.mpick.user.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;
import java.security.Key;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

import static com.k9c202.mpick.user.jwt.JwtFilter.AUTHORIZATION_HEADER;

// token 생성, 검증
@Component
public class TokenProvider implements InitializingBean {

    private final Logger logger = LoggerFactory.getLogger(TokenProvider.class);
    private static final String AUTHORITIES_KEY = "auth";
    private final String secret;
    @Getter
    private final long tokenValidityInMilliseconds;
    private Key key;

    public TokenProvider(
            // @Value : application.yml에 있는 값 사용 (jwt.secret , jwt.token-validity-in-seconds)
            @Value("${jwt.secret}") String secret,
            @Value("${jwt.token-validity-in-seconds}") long tokenValidityInSeconds) {
        this.secret = secret;
        this.tokenValidityInMilliseconds = tokenValidityInSeconds * 1000;
    }

    @Override
    public void afterPropertiesSet() {
        byte[] keyBytes = Decoders.BASE64.decode(secret);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    public String createToken(Authentication authentication) {
        String authorities = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));

        long now = (new Date()).getTime();
        Date validity = new Date(now + this.tokenValidityInMilliseconds);

        // Jwt return
        return Jwts.builder()
                .setSubject(authentication.getName())
                .claim(AUTHORITIES_KEY, authorities)
                .signWith(key, SignatureAlgorithm.HS512)
                .setExpiration(validity)
                // .build();와 동일한 역할
                .compact();
    }

    // jwt payload 데이터 : sub, auth, exp
    public Authentication getAuthentication(String token) {
        Claims claims = Jwts
                .parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
        // jwt에서 authority부분을 포함해서 spring security의 User를 생성. 추후 security context에 저장
        Collection<? extends GrantedAuthority> authorities =
                Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList());

        User principal = new User(claims.getSubject(), "", authorities);

        return new UsernamePasswordAuthenticationToken(principal, token, authorities);

        // tokenProvider : 프로젝트에서 authority를 안 쓰기 때문에 빈 array를 넣어주는 것으로 대체함
//        User principal = new User(claims.getSubject(), "", new ArrayList<>());
//
//        return new UsernamePasswordAuthenticationToken(principal, token, new ArrayList<>());

    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
            logger.info("잘못된 JWT 서명");
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "잘못된 JWT 서명입니다.");
        } catch (ExpiredJwtException e) {
            logger.info("만료된 JWT 토큰");
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "만료된 JWT 토큰입니다.");
        } catch (UnsupportedJwtException e) {
            logger.info("지원되지 않는 JWT 토큰");
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "지원되지 않는 JWT 토큰입니다.");
        } catch (IllegalArgumentException e) {
            logger.info("잘못된 JWT 토큰");
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "잘못된 JWT 토큰입니다.");
        }
    }


    public String resolveToken(HttpServletRequest request) {
        // Header에서 token 부분 문자열 가져오기
        String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
        // 빈 문자열이 아니고 Bearer로 시작하면, 8번째 값부터("Bearer "가 7자리) 가져오기
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }

        // TODO: 2023-11-09 토큰 받는 방식 변경하기
        // WebSocket 연결 시 jwt 토큰 가져오는 설정
        // WebSocket은 Header를 사용하지 않음 (서브 프로토콜 정보 제외)
        // 일단 WebSocket은 Header를 사용하지 않아서 파라미터로 jwt 전달하는 방법 사용
        // 클라이언트의 http 요청이 spring security를 거칠 때의 인증 정보가 웹소켓 세션에 저장됨
        // 방법1) 세션 쿠키
        // 방법2) Sec-Websocket-Protocol header 이용
        // 방법3) Websocket 연결 뒤 jwt 토큰을 메세지로 받아서 인증
        String token = request.getParameter("jwt");
        if (StringUtils.hasText(token)) {
            return token;
        }

        return null;
    }


}