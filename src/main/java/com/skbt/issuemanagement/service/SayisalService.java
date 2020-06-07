package com.skbt.issuemanagement.service;

import com.skbt.issuemanagement.util.TPage;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface SayisalService {
    /*JSONObject save(JSONObject data);

    TPage<JSONObject> getAllPageable(Pageable pageable);*/

    JSONObject getAllSayisalResultService() throws Exception;

    boolean saveOrUpdateSayisal(JSONObject resultJsonData) throws Exception;

    JSONObject getSayisalBilgi(JSONObject data) throws  Exception;

}
