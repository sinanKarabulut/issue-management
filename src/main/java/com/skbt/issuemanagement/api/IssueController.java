package com.skbt.issuemanagement.api;


import com.skbt.issuemanagement.dto.IssueDto;
import com.skbt.issuemanagement.dto.ProjectDto;
import com.skbt.issuemanagement.service.impl.IssueServiceImpl;
import com.skbt.issuemanagement.util.ApiPaths;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(ApiPaths.IssueCtrl.CTRL)
@Api(value = ApiPaths.IssueCtrl.CTRL, description =  "Issue APIs Document")
public class IssueController {
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

    private final IssueServiceImpl issueServiceImpl;

    public  IssueController(IssueServiceImpl issueServiceImpl){
        this.issueServiceImpl = issueServiceImpl;

    }

    @GetMapping("/{id}")
    @ApiOperation(value ="Get By Id Operations",response = IssueDto.class)
    public ResponseEntity<IssueDto> getById(@PathVariable("id") Long id){
        IssueDto projectDto =  issueServiceImpl.getById(id);
        return  ResponseEntity.ok(projectDto);
    }

    @PostMapping
    @ApiOperation(value ="Create Operations",response = IssueDto.class)
    public ResponseEntity<IssueDto> createIssue(@Valid @RequestBody IssueDto issueDto){
        return  ResponseEntity.ok(issueServiceImpl.save(issueDto));
    }

    @PutMapping("/{id}")
    @ApiOperation(value ="Update Operations",response = IssueDto.class)
    //@RequestMapping(path = "/update",method = RequestMethod.PUT)
    public ResponseEntity<IssueDto> updateProject(@PathVariable(value = "id",required = true) Long id,@Valid  @RequestBody IssueDto issueDto){
        //SOLID single responsibility sağlamaz
        //projectServiceImpl.save()
        return ResponseEntity.ok(issueServiceImpl.update(id,issueDto));
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value ="Delete Operations",response = Boolean.class)
    public ResponseEntity<Boolean> delete(@PathVariable(value = "id",required = true) Long id){
        return  ResponseEntity.ok(issueServiceImpl.delete(id));
    }
}
