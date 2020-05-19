package com.skbt.issuemanagement.service.impl;

import com.skbt.issuemanagement.entity.User;
import com.skbt.issuemanagement.repository.UserRepository;
import com.skbt.issuemanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(userName);
        if(user == null){
            throw new UsernameNotFoundException("invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(),user.getPassword(),getAuthority());
    }

    private List<SimpleGrantedAuthority> getAuthority(){
        return Arrays.asList(new SimpleGrantedAuthority("USER"));
    }
}
