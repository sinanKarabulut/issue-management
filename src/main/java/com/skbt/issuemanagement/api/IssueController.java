package com.skbt.issuemanagement.api;


import com.skbt.issuemanagement.dto.IssueDetailDto;
import com.skbt.issuemanagement.dto.IssueDto;
import com.skbt.issuemanagement.dto.IssueUpdateDto;
import com.skbt.issuemanagement.dto.ProjectDto;
import com.skbt.issuemanagement.entity.IssueStatus;
import com.skbt.issuemanagement.service.impl.IssueServiceImpl;
import com.skbt.issuemanagement.util.ApiPaths;
import com.skbt.issuemanagement.util.TPage;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(ApiPaths.IssueCtrl.CTRL)
@Api(value = ApiPaths.IssueCtrl.CTRL, description =  "Issue APIs Document")
@CrossOrigin
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

    @GetMapping("/detail/{id}")
    @ApiOperation(value = "Get By Id Operation", response = IssueDto.class)
    public ResponseEntity<IssueDetailDto> getByIdWithDetails(@PathVariable(value = "id", required = true) Long id) {
        IssueDetailDto detailDto = issueServiceImpl.getByIdWithDetails(id);
        return ResponseEntity.ok(detailDto);
    }


    @PostMapping
    @ApiOperation(value ="Create Operations",response = IssueDto.class)
    public ResponseEntity<IssueDto> createIssue(@Valid @RequestBody IssueDto issueDto){
        return  ResponseEntity.ok(issueServiceImpl.save(issueDto));
    }

    @PutMapping("/{id}")
    @ApiOperation(value ="Update Operations",response = IssueDto.class)
    //@RequestMapping(path = "/update",method = RequestMethod.PUT)
    public ResponseEntity<IssueDetailDto> updateProject(@PathVariable(value = "id",required = true) Long id,@Valid  @RequestBody IssueUpdateDto issueUpdateDto){
        //SOLID single responsibility sağlamaz
        //projectServiceImpl.save()


        System.out.println(issueUpdateDto);
        return ResponseEntity.ok(issueServiceImpl.update(id,issueUpdateDto));
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value ="Delete Operations",response = Boolean.class)
    public ResponseEntity<Boolean> delete(@PathVariable(value = "id",required = true) Long id){
        return  ResponseEntity.ok(issueServiceImpl.delete(id));
    }

    @GetMapping("/pagination")
    @ApiOperation(value ="Get By Pagination Operations",response = ProjectDto.class)
    public ResponseEntity<TPage<IssueDto>> getAllByPagination(Pageable pageable){
        TPage<IssueDto> data = issueServiceImpl.getAllPageable(pageable);
        return  ResponseEntity.ok(data);
    }

    @GetMapping("/statuses")
    @ApiOperation(value = "Get All Issue Statuses Operation", response = String.class, responseContainer = "List")
    public ResponseEntity<List<IssueStatus>> getAll() {
        return ResponseEntity.ok(Arrays.asList(IssueStatus.values()));
    }
}
