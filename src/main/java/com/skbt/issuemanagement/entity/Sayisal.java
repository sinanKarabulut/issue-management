package com.skbt.issuemanagement.entity;

import lombok.*;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Entity
@Table(name="SAYISAL")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Sayisal extends BaseEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="SAYISAL_ID",unique = true, nullable = false, precision = 12, scale = 0)
    private long sayisalId;

    @Column(name="BUYUK_IKRAMIYE",precision = 12,scale = 2)
    private BigDecimal buyukIkramiye;

    @Column(name="BUYUK_IKRAMIYE_KAZANAN_IL")
    private String buyukIkramiyeKazananIl;

    @Column(name="CEKILIS_TARIHI")
    @Temporal(TemporalType.TIMESTAMP)
    private Date cekilisTarihi;

    @Column(name="DEVIR_SAYISI")
    private Integer devirSayisi;

    @Column(name="DEVIR_TUTATI",precision = 12,scale = 2)
    private BigDecimal devirTutari;

    @Column(name = "DEVRETTI", precision = 1, scale = 0)
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private  Boolean devretti;

    @Column(name="HAFTA")
    private Integer hafta;

    @Column(name = "HAFTAYA_DEVREDEN_TUTAR", precision = 12, scale = 2)
    private BigDecimal haftayaDevredenTutar;

    @Column(name = "HASILAT", precision = 12, scale = 2)
    private BigDecimal hasilat;

    @Column(name = "IKRAMIYE_EH", precision = 12, scale = 2)
    private BigDecimal ikramiyeEH;

    @Column(name = "KDV", precision = 12, scale = 2)
    private  BigDecimal kdv;

    @Column(name = "KIBRIS_HASILATI", precision = 12, scale = 2)
    private BigDecimal kibrisHasilati;

    @Column(name = "KOLON_SAYISI", precision = 12)
    private Long kolonSayisi;

    @Column(name = "OID")
    private String oid;

    @Column(name = "RAKAMLAR")
    private String rakamlar;

    @Column(name = "RAKAMLAR_NUMARA_SIRASI")
    private String rakamlarNumaraSirasi;

    @Column(name = "SOV", precision = 12, scale = 2)
    private BigDecimal sov;

    @Column(name = "TOPLAM_HASILAT", precision = 12, scale = 2)
    private BigDecimal toplamHasilat;

    @Column(name = "BIRINCI_NUMARA", precision = 1, scale = 0)
    private Integer birinciNumara;

    @Column(name = "IKINCI_NUMARA", precision = 1, scale = 0)
    private Integer ikinciNumara;

    @Column(name = "UCUNCU_NUMARA", precision = 1, scale = 0)
    private Integer ucuncuNumara;

    @Column(name = "DORDUNCU_NUMARA", precision = 1, scale = 0)
    private Integer dorduncuNumara;

    @Column(name = "BESINCI_NUMARA", precision = 1, scale = 0)
    private Integer besinciNumara;

    @Column(name = "ALTINCI_NUMARA", precision = 1, scale = 0)
    private Integer altinciNumara;

    @Column(name = "AKTIF", precision = 1, scale = 0)
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private  boolean aktif=true;

    /*@OneToMany(fetch = FetchType.LAZY, mappedBy = "sayisalBilenKisilerId")
    private List<SayisalBilenKisiler> sayisalBilenKisiler;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "sayisalBuyukIkramiyeKazananIlcelerId")
    private List<SayisalBuyukIkramiyeKazananIlceler> sayisalBuyukIkramiyeKazananIlcelers;*/


}
