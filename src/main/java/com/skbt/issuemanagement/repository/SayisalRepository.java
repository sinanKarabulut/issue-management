package com.skbt.issuemanagement.repository;

import com.skbt.issuemanagement.entity.Project;
import com.skbt.issuemanagement.entity.Sayisal;
import net.sf.json.JSONObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.function.Predicate;

import static com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type.Root;
import static javafx.scene.input.KeyCode.T;


public interface SayisalRepository extends JpaRepository<Sayisal,Long>, CrudRepository<Sayisal, Long>, JpaSpecificationExecutor<Sayisal> {

    @Query(value = "SELECT max(s.cekilisTarihi) FROM Sayisal s")
    Date maxDate();

    Sayisal getSayisalByCekilisTarihi(Date cekilisTarihi);


}
