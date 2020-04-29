package com.skbt.issuemanagement.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity // jpa annotation
@Table(name="Issue")
@Data // getter setter için
@NoArgsConstructor //boş bir constructure otomatik yapar
@AllArgsConstructor // tüm fieldlar yapılarak yapılmış contructure dır.
@ToString //nesnenin to stringini oluşturur
@EqualsAndHashCode //equals ve hashcode metodunu otomatik ekler
public class Issue extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name="description",length = 1000)
    private String description;

    @Column(name="details",length = 400)
    private String details;

    @Column(name="date")
    private Date date;

    @Column(name="issue_status")
    @Enumerated(EnumType.STRING)
    private IssueStatus issueStatus;

    @JoinColumn(name="assignee_user_id")
    @ManyToOne(optional = true,fetch = FetchType.LAZY) //optional true  onun  assignee bir kullanıcıya atanmasa da olur demek
    // fetchtype yazıldığında get yapıldığında data getirilir
    // fetchtype eager yapılır ise her issue çağırıldığında user da yüklenir.
    private User assignee;

    @JoinColumn(name="project_id")
    @ManyToOne(optional = true,fetch = FetchType.LAZY)
    private Project project;

}
