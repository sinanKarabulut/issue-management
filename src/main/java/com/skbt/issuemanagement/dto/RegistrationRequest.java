package com.skbt.issuemanagement.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import net.bytebuddy.implementation.bind.annotation.Empty;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@ApiModel(value = "Register Data Transfer Object")
public class RegistrationRequest {
    @NotNull
    @NotEmpty
    @ApiModelProperty(required = true,value = "Name of register")
    private String nameSurname;
    @NotNull
    @NotEmpty
    @ApiModelProperty(required = true,value = "username of register")
    private String username;
    @NotNull
    @NotEmpty
    @ApiModelProperty(required = true,value = "password of register")
    private String password;
    @NotNull
    @NotEmpty
    @ApiModelProperty(required = true,value = "email of register")
    private String email;
}
