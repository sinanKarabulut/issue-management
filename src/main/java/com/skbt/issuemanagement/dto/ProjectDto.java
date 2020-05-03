package com.skbt.issuemanagement.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(value = "Project Data Transfer Object")
public class ProjectDto {
    @ApiModelProperty(value = "Project ID")
    private  Long id;
    @NotNull
    @ApiModelProperty(required = true,value = "Name of Project")
    private String projectName;
    @NotNull
    @ApiModelProperty(required = true,value = "Code of Project")
    private String projectCode;
}
