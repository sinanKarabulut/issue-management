package com.skbt.issuemanagement.dto;

import com.skbt.issuemanagement.entity.IssueStatus;
import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(value = "Issue Data Transfer Object")
public class IssueUpdateDto {
    private  Long id;
    private String description;
    private String details;
    private Date date;
    private IssueStatus issueStatus;
    private  Long assignee_id;
    private Long project_id;
}
