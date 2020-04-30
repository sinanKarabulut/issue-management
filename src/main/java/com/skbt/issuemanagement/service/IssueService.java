package com.skbt.issuemanagement.service;

import com.skbt.issuemanagement.dto.IssueDto;
import com.skbt.issuemanagement.entity.Issue;
import com.skbt.issuemanagement.util.TPage;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IssueService {
    IssueDto save(IssueDto issue);

    IssueDto getById(Long id);

    TPage<IssueDto> getAllPageable(Pageable pageable);

    Boolean delete(IssueDto issue);

    IssueDto update(Long id,IssueDto issueDto);
}
