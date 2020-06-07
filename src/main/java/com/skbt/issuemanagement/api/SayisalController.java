package com.skbt.issuemanagement.api;

import com.skbt.issuemanagement.dto.UserDto;
import com.skbt.issuemanagement.service.SayisalService;
import com.skbt.issuemanagement.util.ApiPaths;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import net.sf.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
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

    @GetMapping("/getSayisalBilgi")
    @ApiOperation(value = "getSayisalBilgi By Operation", response = JSONObject.class)
    public ResponseEntity<JSONObject> getSayisalBilgi(@RequestBody JSONObject parameter) throws Exception {
        JSONObject sendJson = new JSONObject();

        sayisalService.getSayisalBilgi(parameter);
        sendJson.put("success",true);
        return ResponseEntity.ok(sendJson);
    }
}
