package com.skbt.issuemanagement.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="SAYISAL_BUYUK_IKRAMIYE_KAZANAN_ILCELER")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class SayisalBuyukIkramiyeKazananIlceler extends BaseEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="SAYISAL_BUYUK_IKRAMIYE_KAZANAN_ILCELER_ID",unique = true, nullable = false, precision = 12, scale = 0)
    private Long sayisalBuyukIkramiyeKazananIlcelerId;

    @Column(name="IL")
    private String il;

    @Column(name="IL_VIEW")
    private String ilView;

    @Column(name="ILCE")
    private  String ilce;

    @Column(name="ILCE_VIEW")
    private  String ilceView;

    @JoinColumn(name="SAYISAL_ID")
    @ManyToOne(optional = true,fetch = FetchType.LAZY)
    private Sayisal sayisal;
}
