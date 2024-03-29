package com.skbt.issuemanagement.service.impl;

import com.skbt.issuemanagement.dto.*;
import com.skbt.issuemanagement.entity.Issue;
import com.skbt.issuemanagement.entity.IssueStatus;
import com.skbt.issuemanagement.entity.Project;
import com.skbt.issuemanagement.entity.User;
import com.skbt.issuemanagement.repository.IssueHistoryRepository;
import com.skbt.issuemanagement.repository.IssueRepository;
import com.skbt.issuemanagement.repository.ProjectRepository;
import com.skbt.issuemanagement.repository.UserRepository;
import com.skbt.issuemanagement.service.IssueService;
import com.skbt.issuemanagement.util.TPage;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.ModelMap;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Service
public class IssueServiceImpl implements IssueService {

    //birinci yöntem
    /*@Autowired
    private IssueRepository issueRepository; // setter injection*/

    private final IssueRepository issueRepository;
    private final IssueHistoryServiceImpl issueHistoryService;
    private final ModelMapper modelMapper;
    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;
    //best practice de constructure injection öneriliyor
    //@Autowired da yazılabilir  spring 5 den itibaren autowired olmadan bunun zaten autowired yapılacağını biliyor.
    public IssueServiceImpl(IssueRepository issueRepository, ModelMapper modelMapper,IssueHistoryServiceImpl issueHistoryService,UserRepository userRepository,ProjectRepository projectRepository) {
        this.issueRepository = issueRepository;
        this.modelMapper = modelMapper;
        this.issueHistoryService = issueHistoryService;
        this.userRepository = userRepository;
        this.projectRepository = projectRepository;
    }


    @Override
    public IssueDto save(IssueDto issue) {

        issue.setDate(new Date());
        issue.setIssueStatus(IssueStatus.OPEN);

        Project project=projectRepository.getOne(issue.getProjectId());


        Issue issueDb = modelMapper.map(issue,Issue.class);

        issueDb.setProject(project);
        issueDb =issueRepository.save(issueDb);

        issueHistoryService.addHistory(issueDb.getId(),issueDb);

        return  modelMapper.map(issueDb,IssueDto.class);
    }

    @Transactional
    public IssueDetailDto update(Long id, IssueUpdateDto issueUpdateDto) {
        Issue issueDb = this.issueRepository.getOne(id);

        User user = userRepository.getOne(issueUpdateDto.getAssignee_id());

        issueDb.setAssignee(user);
        issueDb.setDate(issueUpdateDto.getDate());
        issueDb.setDetails(issueUpdateDto.getDetails());
        issueDb.setDescription(issueUpdateDto.getDescription());
        issueDb.setIssueStatus(issueUpdateDto.getIssueStatus());
        issueDb.setProject(projectRepository.getOne(issueUpdateDto.getProject_id()));

        issueRepository.save(issueDb);

        issueHistoryService.addHistory(id,issueDb);
        return  getByIdWithDetails(issueDb.getId());
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
        Issue issueDb = issueRepository.getById(id);
        if(issueDb == null){
            throw  new IllegalArgumentException("Issue does not exist ID:" + id);
        }

        /*Issue issueCheck = issueRepository.getOne(issueDto.getId());
        if(issueCheck != null){
            throw  new IllegalArgumentException("Issue  already exist");
        }*/

        issueDb.setDate(issueDto.getDate());
        issueDb.setDetails(issueDto.getDetails());
        issueDb.setIssueStatus(issueDto.getIssueStatus());
        issueDb.setAssignee(modelMapper.map(issueDto.getAssignee(), User.class));
        issueDb.setProject(modelMapper.map(issueDto.getProject(),Project.class));

        issueDb =issueRepository.save(issueDb);

        return  modelMapper.map(issueDb, IssueDto.class);
    }

    public IssueDetailDto getByIdWithDetails(Long id) {
        Issue issue = issueRepository.getOne(id);
        IssueDetailDto detailDto = modelMapper.map(issue, IssueDetailDto.class);
        List<IssueHistoryDto> issueHistoryDtos = issueHistoryService.getByIssueId(issue.getId());
        detailDto.setIssueHistories(issueHistoryDtos);
        return detailDto;
    }
}
