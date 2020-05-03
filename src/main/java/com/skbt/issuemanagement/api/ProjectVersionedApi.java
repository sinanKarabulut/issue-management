package com.skbt.issuemanagement.api;

import com.skbt.issuemanagement.dto.ProjectDto;
import com.skbt.issuemanagement.service.impl.ProjectServiceImpl;
import com.skbt.issuemanagement.util.ApiPaths;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/versioning")
@Api(value = ApiPaths.ProjectCtrl.CTRL, description =  "Project APIs Document")
public class ProjectVersionedApi {

    @Autowired
    private ProjectServiceImpl projectServiceImpl;

    @GetMapping(value="/{id}",params="version=1")
    @ApiOperation(value ="Get By Id Operations V1",response = ProjectDto.class)
    public ResponseEntity<ProjectDto> getByIdV1(@PathVariable(value = "id",required = true) Long id){
        ProjectDto projectDto =  projectServiceImpl.getById(id);
        return  ResponseEntity.ok(projectDto);
    }

    @GetMapping(value = "/{id}",params="version=2")
    @ApiOperation(value ="Get By Id Operations V2",response = ProjectDto.class)
    public ResponseEntity<ProjectDto> getByIdV2(@PathVariable(value = "id",required = true) Long id){
        ProjectDto projectDto =  projectServiceImpl.getById(id);
        return  ResponseEntity.ok(projectDto);
    }
}
