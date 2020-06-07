package com.skbt.issuemanagement.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

@Entity
@Table(name="SAYISAL_BILEN_KISILER")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class SayisalBilenKisiler extends BaseEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="SAYISAL_BILEN_KISILER_ID",unique = true, nullable = false, precision = 12, scale = 0)
    private Long sayisalBilenKisilerId;

    @Column(name="KISI_BASINA_DUSEN_IKRAMIYE",precision = 12,scale = 2)
    private BigDecimal kisiBasinaDusenIkramiye;

    @Column(name="KISI_SAYISI")
    private Integer kisiSayisi;

    @Column(name="TUR")
    private String tur;

    @JoinColumn(name="SAYISAL_ID")
    @ManyToOne(optional = true,fetch = FetchType.LAZY)
    private Sayisal sayisal;
}
