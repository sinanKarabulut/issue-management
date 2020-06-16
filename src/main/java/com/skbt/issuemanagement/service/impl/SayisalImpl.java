package com.skbt.issuemanagement.service.impl;

import com.skbt.issuemanagement.dto.ProjectDto;
import com.skbt.issuemanagement.entity.Sayisal;
import com.skbt.issuemanagement.entity.SayisalBilenKisiler;
import com.skbt.issuemanagement.entity.SayisalBuyukIkramiyeKazananIlceler;
import com.skbt.issuemanagement.repository.SayisalBilenKisilerRepository;
import com.skbt.issuemanagement.repository.SayisalBuyukIkramiyeKazananIlcelerRepository;
import com.skbt.issuemanagement.repository.SayisalRepository;
import com.skbt.issuemanagement.service.SayisalService;
import com.skbt.issuemanagement.util.TPage;
import com.skbt.issuemanagement.util.Utils;
import lombok.extern.slf4j.Slf4j;
import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.rmi.CORBA.Util;
import java.math.BigDecimal;
import java.util.*;
import java.util.function.Predicate;

@Service
@Slf4j
public class SayisalImpl implements SayisalService {
    private  final SayisalRepository sayisalRepository;
    private  final SayisalBilenKisilerRepository sayisalBilenKisilerRepository;
    private final SayisalBuyukIkramiyeKazananIlcelerRepository sayisalBuyukIkramiyeKazananIlcelerRepository;
    private  final ModelMapper modelMapper;


    public SayisalImpl(SayisalRepository sayisalRepository,ModelMapper modelMapper,
                       SayisalBilenKisilerRepository sayisalBilenKisilerRepository,
                       SayisalBuyukIkramiyeKazananIlcelerRepository sayisalBuyukIkramiyeKazananIlcelerRepository
                       ){
        this.sayisalRepository=sayisalRepository;
        this.modelMapper = modelMapper;
        this.sayisalBilenKisilerRepository = sayisalBilenKisilerRepository;
        this.sayisalBuyukIkramiyeKazananIlcelerRepository = sayisalBuyukIkramiyeKazananIlcelerRepository;
    }

    /*@Override
    public JSONObject save(JSONObject data) {

        return null;
    }*/

    /*@Override
    public TPage<JSONObject> getAllPageable(Pageable pageable) {
        Page<JSONObject> dataList = sayisalRepository.findAll(pageable);

        TPage<JSONObject> response = new TPage<>();

        response.setStat(dataList, Arrays.asList(modelMapper.map(dataList.getContent(),JSONObject[].class)));

        return  response;
    }*/

    @Override
    @Transactional(timeout = 1000 , propagation = Propagation.REQUIRED, readOnly = false, rollbackFor = Exception.class)
    public JSONObject getAllSayisalResultService() throws Exception {

        JSONObject sendJson = new JSONObject();

        Date maxDate = sayisalRepository.maxDate();
        if(maxDate == null){
            String defaultDateStr="01/01/2018";
            maxDate = Utils.toDate(defaultDateStr,Utils.strDateFormat);
        }

        List<String> serviceDateList = Utils.getDateList(maxDate);
        String mainUrl = "http://www.millipiyango.gov.tr/sonuclar/cekilisler/sayisal/";

        if(serviceDateList == null || serviceDateList.size() == 0){
            throw  new Exception("kayıt çekilecek tarih bulunamamıştır.");
        }
        String result="";
        for(int i =0; i< serviceDateList.size();i++){
            String url= "SAY_" +  serviceDateList.get(i)  + ".json";
            result = Utils.getResultString(mainUrl,serviceDateList.get(i),url);
            if(result == null){
                continue;
            }
            JSONObject resultJson = Utils.reqGetJsonObject(result);
            boolean success = Utils.objGetBoolean(resultJson,"success",false);
            if(!success){
                continue;
            }
            JSONObject resultJsonData = resultJson.getJSONObject("data");
            if(resultJsonData == null){
                continue;
            }
            saveOrUpdateSayisal(resultJsonData);
        }


        sendJson.put("success",true);
        return sendJson;
    }


    @Override
    @Transactional(isolation = Isolation.DEFAULT, readOnly = false, propagation = Propagation.REQUIRES_NEW, rollbackFor = {Exception.class})
    public  boolean saveOrUpdateSayisal(JSONObject resultJsonData) throws Exception {
        Sayisal sayisal=new Sayisal();

        JSONArray bilenKisiler = resultJsonData.getJSONArray("bilenKisiler");
        JSONArray buyukIkrKazananIlIlceler = resultJsonData.getJSONArray("buyukIkrKazananIlIlceler");

        BigDecimal buyukIkramiye = Utils.objGetBigDecimal(resultJsonData,"buyukIkramiye",null);
        String buyukIkramiyeKazananIl =Utils.objGetString(resultJsonData,"buyukIkramiyeKazananIl",null);
        Date cekilisTarihi = Utils.objGetDate(resultJsonData,"cekilisTarihi",null,Utils.strDateFormat);
        String cekilisTuru = Utils.objGetString(resultJsonData,"cekilisTuru",null);
        Integer devirSayisi = Utils.objGetInt(resultJsonData,"devirSayisi",null);
        BigDecimal devirTutari = Utils.objGetBigDecimal(resultJsonData,"devirTutari",null);
        Boolean devretti  = Utils.objGetBoolean(resultJsonData,"devretti",false);
        Integer hafta = Utils.objGetInt(resultJsonData,"hafta",null);
        BigDecimal haftayaDevredenTutar = Utils.objGetBigDecimal(resultJsonData,"haftayaDevredenTutar",null);
        BigDecimal hasilat = Utils.objGetBigDecimal(resultJsonData,"hasilat",null);
        BigDecimal ikramiyeEH = Utils.objGetBigDecimal(resultJsonData,"ikramiyeEH",null);
        BigDecimal kdv  = Utils.objGetBigDecimal(resultJsonData,"kdv",null);
        BigDecimal kibrisHasilati = Utils.objGetBigDecimal(resultJsonData,"kibrisHasilati",null);
        Long kolonSayisi = Utils.objGetLong(resultJsonData,"kolonSayisi",null);
        String oid = Utils.objGetString(resultJsonData,"oid",null);
        String rakamlar = Utils.objGetString(resultJsonData,"rakamlar",null);
        String rakamlarNumaraSirasi = Utils.objGetString(resultJsonData,"rakamlarNumaraSirasi",null);
        BigDecimal sov = Utils.objGetBigDecimal(resultJsonData,"sov",null);
        BigDecimal toplamHasilat = Utils.objGetBigDecimal(resultJsonData,"toplamHasilat",null);

        Sayisal sayilCekilisTarihi = sayisalRepository.getSayisalByCekilisTarihi(cekilisTarihi);
        if(sayilCekilisTarihi != null){
            log.error(Utils.toString(cekilisTarihi,Utils.strDateFormat) + " tarih daha önce çekilmiştir.!");

            return false;
        }

        if(rakamlar == null){
            throw new Exception("rakamlara ulaşılamamıştır.!");
        }

        String[] rakamList = rakamlar.split("#");
        if(rakamList == null || rakamList.length < 5){
            throw new Exception("rakamların hepsine ulaşılamamıştır.");
        }

        sayisal.setBirinciNumara(Integer.parseInt(rakamList[0]));
        sayisal.setIkinciNumara(Integer.parseInt(rakamList[1]));
        sayisal.setUcuncuNumara(Integer.parseInt(rakamList[2]));
        sayisal.setDorduncuNumara(Integer.parseInt(rakamList[3]));
        sayisal.setBesinciNumara(Integer.parseInt(rakamList[4]));
        sayisal.setAltinciNumara(Integer.parseInt(rakamList[5]));



        sayisal.setBuyukIkramiye(buyukIkramiye);
        sayisal.setBuyukIkramiyeKazananIl(buyukIkramiyeKazananIl);
        sayisal.setCekilisTarihi(cekilisTarihi);
        sayisal.setDevirSayisi(devirSayisi);
        sayisal.setDevirTutari(devirTutari);
        sayisal.setDevretti(devretti);
        sayisal.setHafta(hafta);
        sayisal.setHaftayaDevredenTutar(haftayaDevredenTutar);
        sayisal.setHasilat(hasilat);
        sayisal.setIkramiyeEH(ikramiyeEH);
        sayisal.setKdv(kdv);
        sayisal.setKibrisHasilati(kibrisHasilati);
        sayisal.setKolonSayisi(kolonSayisi);
        sayisal.setOid(oid);
        sayisal.setRakamlar(rakamlar);
        sayisal.setRakamlarNumaraSirasi(rakamlarNumaraSirasi);
        sayisal.setSov(sov);
        sayisal.setToplamHasilat(toplamHasilat);
        log.info(Utils.toString(cekilisTarihi,Utils.strDateFormat) + " kaydı çekiliyor..");
        sayisalRepository.save(sayisal);

        //region bilen kişiler kayıt
        if(bilenKisiler != null && bilenKisiler.size() > 0){
            SayisalBilenKisiler sayisalBilenKisilerObj=null;

            for(int i=0;i< bilenKisiler.size();i++){
                sayisalBilenKisilerObj = new SayisalBilenKisiler();

                JSONObject bilenKisiObj = bilenKisiler.getJSONObject(i);
                if(bilenKisiObj != null){
                    BigDecimal kisiBasinaDusenIkramiye = Utils.objGetBigDecimal(bilenKisiObj,"kisiBasinaDusenIkramiye",null);
                    Integer kisiSayisi = Utils.objGetInt(bilenKisiObj,"kisiSayisi",null);
                    String oidBilen = Utils.objGetString(bilenKisiObj,"oid",null);
                    String tur = Utils.objGetString(bilenKisiObj,"tur",null);

                    sayisalBilenKisilerObj.setKisiBasinaDusenIkramiye(kisiBasinaDusenIkramiye);
                    sayisalBilenKisilerObj.setKisiSayisi(kisiSayisi);
                    sayisalBilenKisilerObj.setTur(tur);
                    sayisalBilenKisilerObj.setSayisal(sayisal);
                    sayisalBilenKisilerRepository.saveAndFlush(sayisalBilenKisilerObj);
                }
            }
        }
        //endregion

        //region buyuk ikramiye kazanan ilçeler
        if(buyukIkrKazananIlIlceler != null && buyukIkrKazananIlIlceler.size() > 0){
            SayisalBuyukIkramiyeKazananIlceler sayisalBuyukIkramiyeKazananIlcelerObj=null;

            for(int i=0;i< buyukIkrKazananIlIlceler.size();i++){
                sayisalBuyukIkramiyeKazananIlcelerObj = new SayisalBuyukIkramiyeKazananIlceler();

                JSONObject buyukIkrKazananIlIlcelerJSONObject = buyukIkrKazananIlIlceler.getJSONObject(i);
                if(buyukIkrKazananIlIlcelerJSONObject != null){
                    String il = Utils.objGetString(buyukIkrKazananIlIlcelerJSONObject,"il",null);
                    String ilView = Utils.objGetString(buyukIkrKazananIlIlcelerJSONObject,"ilView",null);
                    String ilce = Utils.objGetString(buyukIkrKazananIlIlcelerJSONObject,"ilce",null);
                    String ilceView = Utils.objGetString(buyukIkrKazananIlIlcelerJSONObject,"ilceView",null);

                    sayisalBuyukIkramiyeKazananIlcelerObj.setIl(il);
                    sayisalBuyukIkramiyeKazananIlcelerObj.setIlView(ilView);
                    sayisalBuyukIkramiyeKazananIlcelerObj.setIlce(ilce);
                    sayisalBuyukIkramiyeKazananIlcelerObj.setIlceView(ilceView);
                    sayisalBuyukIkramiyeKazananIlcelerObj.setSayisal(sayisal);
                    sayisalBuyukIkramiyeKazananIlcelerRepository.saveAndFlush(sayisalBuyukIkramiyeKazananIlcelerObj);
                }
            }
        }

        //endregion


        log.info(Utils.toString(cekilisTarihi,Utils.strDateFormat) + " kaydı başarı ile çekildi..");
        return  true;
    }

    public JSONObject getSayisalBilgi(Map<String, String[]> requestMap) throws  Exception{
        JSONObject sendJson = new JSONObject();

        Date aramaTarih = Utils.getRequestMapDateValue(requestMap,"cekilisTarihi",null,Utils.strDateFormat);

        Sayisal sayisal = new Sayisal();
        sayisal.setCekilisTarihi(aramaTarih);

        List<Sayisal> list = sayisalRepository.findAll(findByAndCriteria(sayisal));



        sendJson.put("data",list);
        sendJson.put("success",true);
        return  sendJson;
    }



    public Specification<Sayisal> findByAndCriteria(Sayisal sayisal) {
        return (Root<Sayisal> root, CriteriaQuery<?> query, CriteriaBuilder builder) -> {
            List<javax.persistence.criteria.Predicate> predicates = new ArrayList<>();

            if(sayisal.getCekilisTarihi() != null){
                predicates.add(builder.equal(root.get("cekilisTarihi"),sayisal.getCekilisTarihi()));
            }


            return builder.and(predicates.toArray(new javax.persistence.criteria.Predicate[0]));
        };
    }
}
