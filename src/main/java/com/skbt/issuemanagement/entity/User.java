package com.skbt.issuemanagement.entity;

import lombok.*;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity // jpa annotation
@Table(name="Users")
@Data // getter setter için
@NoArgsConstructor //boş bir constructure otomatik yapar
@AllArgsConstructor // tüm fieldlar yapılarak yapılmış contructure dır.
@ToString //nesnenin to stringini oluşturur
@EqualsAndHashCode //equals ve hashcode metodunu otomatik ekler
public class User extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name="uname",length = 200,unique = true)
    private String username;

    //@JsonIgnore // json  olarak gönderilirken bu field dahil edilmeyecek anlamına gelir
    @Column(name="pwd",length = 100)
    private String password;

    @Column(name="name_surname",length = 200)
    private String nameSurname;

    @Column(name="email",length = 100)
    private String email;

    @JoinColumn(name="assignee_user_id")
    @OneToMany(fetch = FetchType.LAZY)
    private List<Issue> issues;
}
