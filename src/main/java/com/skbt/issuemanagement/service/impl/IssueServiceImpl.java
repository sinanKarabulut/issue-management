package com.skbt.issuemanagement.service.impl;

import com.skbt.issuemanagement.dto.IssueDto;
import com.skbt.issuemanagement.dto.ProjectDto;
import com.skbt.issuemanagement.entity.Issue;
import com.skbt.issuemanagement.entity.Project;
import com.skbt.issuemanagement.entity.User;
import com.skbt.issuemanagement.repository.IssueRepository;
import com.skbt.issuemanagement.service.IssueService;
import com.skbt.issuemanagement.util.TPage;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

import java.util.Arrays;
import java.util.Date;

@Service
public class IssueServiceImpl implements IssueService {

    //birinci yöntem
    /*@Autowired
    private IssueRepository issueRepository; // setter injection*/

    private final IssueRepository issueRepository;
    private final ModelMapper modelMapper;
    //best practice de constructure injection öneriliyor
    //@Autowired da yazılabilir  spring 5 den itibaren autowired olmadan bunun zaten autowired yapılacağını biliyor.
    public IssueServiceImpl(IssueRepository issueRepository, ModelMapper modelMapper) {
        this.issueRepository = issueRepository;
        this.modelMapper = modelMapper;
    }


    @Override
    public IssueDto save(IssueDto issue) {
        if(issue.getDate() == null){
            throw new IllegalArgumentException("Issue Date cannot be null");
        }
        Issue issueDb = modelMapper.map(issue,Issue.class);
        issueDb =issueRepository.save(issueDb);

        return  modelMapper.map(issueDb,IssueDto.class);
    }

    @Override
    public IssueDto getById(Long id) {
        Issue issue = issueRepository.getOne(id);

        return  modelMapper.map(issue,IssueDto.class);
    }

    @Override
    public TPage<IssueDto> getAllPageable(Pageable pageable) {
        TPage page = new TPage<IssueDto>();

       Page<Issue> data = issueRepository.findAll(pageable);
        IssueDto[] dtos = modelMapper.map(data.getContent(),IssueDto[].class);

        page.setStat(data, Arrays.asList(dtos));

       return  page ;
    }

    @Override
    public Boolean delete(IssueDto issue) {
        return null;
    }

    public Boolean delete(Long id) {
        issueRepository.deleteById(id);
        return  true;
    }

    @Override
    public IssueDto update(Long id, IssueDto issueDto) {
        Issue issueDb = issueRepository.getOne(id);
        if(issueDb == null){
            throw  new IllegalArgumentException("Issue does not exist ID:" + id);
        }

        Issue issueCheck = issueRepository.getOne(issueDto.getId());
        if(issueCheck != null){
            throw  new IllegalArgumentException("Issue  already exist");
        }

        issueDb.setDate(issueDto.getDate());
        issueDb.setDetails(issueDto.getDetails());
        issueDb.setIssueStatus(issueDto.getIssueStatus());
        issueDb.setAssignee(modelMapper.map(issueDto.getAssignee(), User.class));
        issueDb.setProject(modelMapper.map(issueDto.getProject(),Project.class));

        issueDb =issueRepository.save(issueDb);

        return  modelMapper.map(issueDb, IssueDto.class);
    }
}
