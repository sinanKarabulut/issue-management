package com.skbt.issuemanagement.advice;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor // instance yaratmak istenebilir
public class ExceptionResponse {
    private Date date;
    private String message;
}
