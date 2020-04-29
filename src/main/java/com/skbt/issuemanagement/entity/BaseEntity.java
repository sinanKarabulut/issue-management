package com.skbt.issuemanagement.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.io.Serializable;
import java.util.Date;

//@Data // getter ve setterları otomatik yapar kodun sade kalması sağlanır
//data yerine getter setter da yazılabilir.
@Getter
@Setter
@MappedSuperclass // bütün classlarda veritabanında extend edilebilmesini sağlar
public abstract class BaseEntity implements Serializable {
    @Column(name ="created_at")
    @Temporal(TemporalType.TIMESTAMP) // milisaniyeye kadar tutar, Date saatsiz,TIME  saniyeye kadar
    private Date createAt;

    @Column(name ="created_by",length = 100)
    private  String createBy;

    @Column(name ="updated_at")
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedAt;

    @Column(name ="updated_by",length = 100)
    private  String updatedBy;

    @Column(name="status")
    private  Boolean status;

}
