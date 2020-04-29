package com.skbt.issuemanagement.repository;

import com.skbt.issuemanagement.entity.IssueHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository //singleton bir tane instance oluşturur 
public interface IssueHistoryRepository extends JpaRepository<IssueHistory,Long> {
}
