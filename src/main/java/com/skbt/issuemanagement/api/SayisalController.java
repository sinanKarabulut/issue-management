package com.skbt.issuemanagement.api;

import com.skbt.issuemanagement.dto.UserDto;
import com.skbt.issuemanagement.service.SayisalService;
import com.skbt.issuemanagement.util.ApiPaths;
import com.sun.deploy.net.HttpResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import net.sf.json.JSONObject;
import org.springframework.http.HttpRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

@RestController(value = "sayisalController")
@RequestMapping(ApiPaths.SayisalCtrl.CTRL)
@CrossOrigin
@Api(value = ApiPaths.SayisalCtrl.CTRL, description =  "Sayısal APIs Document")
@Slf4j
public class SayisalController {

    private final SayisalService sayisalService;

    public  SayisalController(SayisalService sayisalService){
        this.sayisalService = sayisalService;
    }

    @PostMapping("/getAllSayisalResultService")
    @ApiOperation(value = "getAllSayisalResultService By Operation", response = JSONObject.class)
    public ResponseEntity<JSONObject> getAllSayisalResultService() throws Exception {
        JSONObject sendJson = new JSONObject();

        sayisalService.getAllSayisalResultService();
        sendJson.put("success",true);
        return ResponseEntity.ok(sendJson);
    }

    @RequestMapping("/getSayisalBilgi")
    @ApiOperation(value = "getSayisalBilgi By Operation", response = JSONObject.class)
    public ResponseEntity<String> getSayisalBilgi(HttpServletRequest request, HttpServletResponse response) throws Exception {

        Map<String, String[]> requestMap = request.getParameterMap();
        JSONObject sendJson =sayisalService.getSayisalBilgi(requestMap);
        return ResponseEntity.ok(sendJson.toString());
    }
}
