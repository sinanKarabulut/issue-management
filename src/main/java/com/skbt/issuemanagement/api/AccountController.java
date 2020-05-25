package com.skbt.issuemanagement.api;

import com.skbt.issuemanagement.dto.LoginRequest;
import com.skbt.issuemanagement.dto.RegistrationRequest;
import com.skbt.issuemanagement.dto.TokenResponse;
import com.skbt.issuemanagement.entity.User;
import com.skbt.issuemanagement.repository.UserRepository;
import com.skbt.issuemanagement.security.JwtTokenUtil;
import com.skbt.issuemanagement.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;
import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/token")
public class AccountController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserServiceImpl userService;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<TokenResponse> login(@RequestBody LoginRequest request) throws AuthenticationException {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        final User user = userRepository.findByUsername(request.getUsername());
        final String token = jwtTokenUtil.generateToken(user);
        return ResponseEntity.ok(new TokenResponse(user.getUsername(), token));
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<Boolean> register(@Valid  @RequestBody RegistrationRequest registrationRequest) throws AuthenticationException {
        Boolean response = userService.register(registrationRequest);
        return ResponseEntity.ok(response);
    }

}
