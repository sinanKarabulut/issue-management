package com.skbt.issuemanagement.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity // jpa annotation
@Table(name="Issue_History")
@Data // getter setter için
@NoArgsConstructor //boş bir constructure otomatik yapar
@AllArgsConstructor // tüm fieldlar yapılarak yapılmış contructure dır.
@ToString //nesnenin to stringini oluşturur
@EqualsAndHashCode //equals ve hashcode metodunu otomatik ekler
public class IssueHistory extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @JoinColumn(name="issue_id")
    @ManyToOne(optional = true,fetch = FetchType.LAZY)
    private Issue issue;

    @Column(name = "description",length = 1000)
    private String description;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="date")
    private Date date;

    @Column(name="issue_status")
    @Enumerated(EnumType.STRING)
    private IssueStatus issueStatus;

    @Column(name="details",length = 4000)
    private String details;

    @JoinColumn(name="assignee_user_id")
    @ManyToOne(optional = true,fetch = FetchType.LAZY)
    private User assignee;
}
