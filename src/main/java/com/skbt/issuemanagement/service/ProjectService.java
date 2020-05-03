package com.skbt.issuemanagement.service;

import com.skbt.issuemanagement.dto.ProjectDto;
import com.skbt.issuemanagement.entity.Issue;
import com.skbt.issuemanagement.entity.Project;
import com.skbt.issuemanagement.util.TPage;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProjectService {
    ProjectDto save(ProjectDto project);

    ProjectDto getById(Long id);

    ProjectDto getByProjectCode(String projectCode);

    List<Project> getByProjectCodeContains(String projectCode);

    TPage<ProjectDto> getAllPageable(Pageable pageable);

    Boolean delete(Project project);

    ProjectDto update(Long id,ProjectDto projectDto);
}
