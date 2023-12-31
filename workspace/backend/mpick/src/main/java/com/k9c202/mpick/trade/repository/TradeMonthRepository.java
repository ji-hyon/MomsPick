package com.k9c202.mpick.trade.repository;

import com.k9c202.mpick.trade.entity.TradeMonth;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TradeMonthRepository extends JpaRepository<TradeMonth, Integer> {
}
