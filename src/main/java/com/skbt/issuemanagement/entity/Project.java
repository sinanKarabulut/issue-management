package com.skbt.issuemanagement.entity;

import lombok.*;

import javax.persistence.*;

@Entity // jpa annotation
@Table(name="Project")
@Data // getter setter için
@NoArgsConstructor //boş bir constructure otomatik yapar
@AllArgsConstructor // tüm fieldlar yapılarak yapılmış contructure dır.
@ToString //nesnenin to stringini oluşturur
@EqualsAndHashCode //equals ve hashcode metodunu otomatik ekler
public class Project extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name="project_code",unique = true)
    private String projectCode;

    @Column(name="project_name",length = 1000)
    private String projectName;

    @JoinColumn(name="manager_user_id")
    @ManyToOne(optional = true,fetch = FetchType.LAZY)
    private User manager;


}
