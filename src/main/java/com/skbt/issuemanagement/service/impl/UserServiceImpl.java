package com.skbt.issuemanagement.service.impl;

import com.skbt.issuemanagement.entity.User;
import com.skbt.issuemanagement.repository.UserRepository;
import com.skbt.issuemanagement.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private  final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getById(Long id) {
        return userRepository.getOne(id);
    }

    @Override
    public Page<User> getAllPageable(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @Override
    public Boolean delete(User user) {
        userRepository.delete(user);
        return  true;
    }

    @Override
    public User getByUsername(String username) {
        return userRepository.getByUsername(username);
    }

}
