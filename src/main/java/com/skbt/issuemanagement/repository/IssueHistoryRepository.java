package com.skbt.issuemanagement.repository;

import com.skbt.issuemanagement.entity.IssueHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository //singleton bir tane instance oluşturur 
public interface IssueHistoryRepository extends JpaRepository<IssueHistory,Long> {
    List<IssueHistory> getByIssueIdOrderById(Long id);
}
