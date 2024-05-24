package com.sipe.guitar4u.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sipe.guitar4u.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
