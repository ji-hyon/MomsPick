package com.k9c202.mpick.user.controller.request;

import lombok.Data;

@Data
public class UpdatePasswordRequest {
    private String password;
    private String newPassword;
}
