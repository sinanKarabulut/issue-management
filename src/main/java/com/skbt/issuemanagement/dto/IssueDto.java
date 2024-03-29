package com.skbt.issuemanagement.dto;

import com.skbt.issuemanagement.entity.IssueStatus;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(value = "Issue Data Transfer Object")
public class IssueDto {
    private  Long id;
    private String description;
    private String details;
    private Date date;
    private IssueStatus issueStatus;
    private  UserDto assignee;
    private ProjectDto project;
    private Long projectId;

}
