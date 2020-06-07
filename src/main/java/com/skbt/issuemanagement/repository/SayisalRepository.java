package com.skbt.issuemanagement.repository;

import com.skbt.issuemanagement.entity.Project;
import com.skbt.issuemanagement.entity.Sayisal;
import net.sf.json.JSONObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.math.BigDecimal;
import java.util.Date;


public interface SayisalRepository extends JpaRepository<Sayisal,Long> {
    Sayisal getSayisalByCekilisTarihi(Date cekilisTarihi);

    @Query(value = "SELECT max(s.cekilisTarihi) FROM Sayisal s")
    Date maxDate();
}
