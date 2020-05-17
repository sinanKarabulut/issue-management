package com.skbt.issuemanagement.api;

import com.skbt.issuemanagement.dto.ProjectDto;
import com.skbt.issuemanagement.dto.UserDto;
import com.skbt.issuemanagement.service.impl.ProjectServiceImpl;
import com.skbt.issuemanagement.service.impl.UserServiceImpl;
import com.skbt.issuemanagement.util.ApiPaths;
import com.skbt.issuemanagement.util.TPage;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(ApiPaths.ProjectCtrl.CTRL)
@Api(value = ApiPaths.ProjectCtrl.CTRL, description =  "Project APIs Document")
@Slf4j
@CrossOrigin
public class ProjectController {
    /**
     * http methodları
     * get
     * post
     * put update işlemleri için kulanılır
     * delete
     */

    //responseEntity api metodlarının ortak bir imzaya sahip olması ve entity üzerinde status, message gibi
    //entityi build edebilmemizi sağlar.
    //@Mapping tüm detaylarını belirtebiliriz.
    //@RequestMapping tüm detaylarını belirtebiliriz

    private final ProjectServiceImpl projectServiceImpl;


    public  ProjectController(ProjectServiceImpl projectServiceImpl){
        this.projectServiceImpl = projectServiceImpl;
    }

    @GetMapping("/pagination")
    @ApiOperation(value ="Get By Pagination Operations",response = ProjectDto.class)
    public ResponseEntity<TPage<ProjectDto>> getAllByPagination(Pageable pageable){
        TPage<ProjectDto> data = projectServiceImpl.getAllPageable(pageable);
        return  ResponseEntity.ok(data);
    }

    @GetMapping()
    @ApiOperation(value = "Get All By Operation", response = UserDto.class)
    public ResponseEntity<List<ProjectDto>> getAll() {
        List<ProjectDto> data = projectServiceImpl.getAll();
        return ResponseEntity.ok(data);
    }

    @GetMapping("/{id}")
    @ApiOperation(value ="Get By Id Operations",response = ProjectDto.class)
    public ResponseEntity<ProjectDto> getById(@PathVariable("id") Long id){
        log.info("ProjectController -> GetById ");
        log.debug("ProjectController -> GetById -> Param:" + id);


        ProjectDto projectDto =  projectServiceImpl.getById(id);
        return  ResponseEntity.ok(projectDto);
    }

    @PostMapping
    @ApiOperation(value ="Create Operations",response = ProjectDto.class)
    public ResponseEntity<ProjectDto> createProject(@Valid  @RequestBody ProjectDto project){
        return  ResponseEntity.ok(projectServiceImpl.save(project));
    }

    @PutMapping("/{id}")
    @ApiOperation(value ="Update Operations",response = ProjectDto.class)
    //@RequestMapping(path = "/update",method = RequestMethod.PUT)
    public ResponseEntity<ProjectDto> updateProject(@PathVariable(value = "id",required = true) Long id,@Valid  @RequestBody ProjectDto project){
        //SOLID single responsibility sağlamaz
        //projectServiceImpl.save()
       return ResponseEntity.ok(projectServiceImpl.update(id,project));
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value ="Delete Operations",response = Boolean.class)
    public ResponseEntity<Boolean> delete(@PathVariable(value = "id",required = true) Long id){
        return  ResponseEntity.ok(projectServiceImpl.delete(id));
    }
}
