package com.skbt.issuemanagement.service.impl;

import com.skbt.issuemanagement.dto.IssueDto;
import com.skbt.issuemanagement.dto.ProjectDto;
import com.skbt.issuemanagement.dto.UserDto;
import com.skbt.issuemanagement.entity.Issue;
import com.skbt.issuemanagement.entity.Project;
import com.skbt.issuemanagement.entity.User;
import com.skbt.issuemanagement.repository.ProjectRepository;
import com.skbt.issuemanagement.service.ProjectService;
import com.skbt.issuemanagement.util.TPage;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

import java.util.Arrays;
import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {

    private   final ProjectRepository projectRepository;
    private  final ModelMapper modelMapper;
    private final UserServiceImpl userService;
    public ProjectServiceImpl(ProjectRepository projectRepository,ModelMapper modelMapper,UserServiceImpl userService){
        this.projectRepository = projectRepository;
        this.modelMapper = modelMapper;
        this.userService = userService;
    }

    @Override
    public ProjectDto save(ProjectDto project) {
        Project projectCheck = projectRepository.getByProjectCode(project.getProjectCode());

        if(projectCheck != null){
            throw  new IllegalArgumentException("Project code already exist");
        }

        Project projectDb = modelMapper.map(project,Project.class);

        UserDto userDto = userService.getById(project.getManagerId());
        User userDb = modelMapper.map(userDto,User.class);
        projectDb.setManager(userDb);

        projectDb =projectRepository.save(projectDb);

        return  modelMapper.map(projectDb, ProjectDto.class);
    }

    @Override
    public ProjectDto getById(Long id) {
        Project project = projectRepository.getOne(id);

        return  modelMapper.map(project,ProjectDto.class);
    }

    @Override
    public ProjectDto getByProjectCode(String projectCode) {
        Project project = projectRepository.getByProjectCode(projectCode);

        return modelMapper.map(project,ProjectDto.class);
    }

    @Override
    public List<Project> getByProjectCodeContains(String projectCode) {
        return projectRepository.getByProjectCodeContains(projectCode);
    }

    @Override
    public TPage<ProjectDto> getAllPageable(Pageable pageable) {
        Page<Project> data = projectRepository.findAll(pageable);

        TPage<ProjectDto> response = new TPage<>();

        response.setStat(data, Arrays.asList(modelMapper.map(data.getContent(),ProjectDto[].class)));

        return  response;
    }

    @Override
    public Boolean delete(Project project) {
        projectRepository.delete(project);
        return  Boolean.TRUE;
    }

    public Boolean delete(Long id) {
        projectRepository.deleteById(id);
        return  true;
    }

    @Override
    public ProjectDto update(Long id, ProjectDto projectDto) {
        Project projectDb = projectRepository.getOne(id);
        if(projectDb == null){
            throw  new IllegalArgumentException("Project does not exist ID:" + id);
        }

        Project projectCheck = projectRepository.getByProjectCodeAndIdNot(projectDto.getProjectCode(),id);
        if(projectCheck != null){
            throw  new IllegalArgumentException("Project code already exist");
        }

        projectDb.setProjectCode(projectDto.getProjectCode());
        projectDb.setProjectName(projectDto.getProjectName());

        projectDb =projectRepository.save(projectDb);

        return  modelMapper.map(projectDb, ProjectDto.class);
    }

    @Override
    public List<ProjectDto> getAll() {
        List<Project> list  = this.projectRepository.findAll();
        return  Arrays.asList(modelMapper.map(list,ProjectDto[].class));
    }


}
