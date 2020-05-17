package com.skbt.issuemanagement.repository;

import com.skbt.issuemanagement.entity.Issue;
import com.skbt.issuemanagement.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueRepository extends JpaRepository<Issue,Long> {
    Issue getById(Long id);
}
