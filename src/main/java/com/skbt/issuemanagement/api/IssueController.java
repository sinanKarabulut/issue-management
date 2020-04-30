package com.skbt.issuemanagement.api;


import com.skbt.issuemanagement.dto.IssueDto;
import com.skbt.issuemanagement.service.impl.IssueServiceImpl;
import com.skbt.issuemanagement.util.ApiPaths;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(ApiPaths.IssueCtrl.CTRL)
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
    public ResponseEntity<IssueDto> getById(@PathVariable("id") Long id){
        IssueDto projectDto =  issueServiceImpl.getById(id);
        return  ResponseEntity.ok(projectDto);
    }

    @PostMapping
    public ResponseEntity<IssueDto> createIssue(@Valid @RequestBody IssueDto issueDto){
        return  ResponseEntity.ok(issueServiceImpl.save(issueDto));
    }

    @PutMapping("/{id}")
    //@RequestMapping(path = "/update",method = RequestMethod.PUT)
    public ResponseEntity<IssueDto> updateProject(@PathVariable(value = "id",required = true) Long id,@Valid  @RequestBody IssueDto issueDto){
        //SOLID single responsibility sağlamaz
        //projectServiceImpl.save()
        return ResponseEntity.ok(issueServiceImpl.update(id,issueDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable(value = "id",required = true) Long id){
        return  ResponseEntity.ok(issueServiceImpl.delete(id));
    }
}
