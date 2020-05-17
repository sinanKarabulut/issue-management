package com.skbt.issuemanagement.service;

import com.skbt.issuemanagement.dto.IssueHistoryDto;
import com.skbt.issuemanagement.entity.Issue;
import com.skbt.issuemanagement.entity.IssueHistory;
import com.skbt.issuemanagement.util.TPage;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IssueHistoryService {
    IssueHistoryDto save(IssueHistoryDto issueHistory);

    IssueHistoryDto getById(Long id);

    List<IssueHistoryDto> getByIssueId(Long id);

    TPage<IssueHistoryDto> getAllPageable(Pageable pageable);

    Boolean delete(IssueHistoryDto issueHistory);

    void addHistory(Long id, Issue issue);
}
