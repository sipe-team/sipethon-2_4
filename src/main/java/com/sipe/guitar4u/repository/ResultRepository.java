package com.sipe.guitar4u.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sipe.guitar4u.domain.Result;

@Repository
public interface ResultRepository extends JpaRepository<Result, Long> {
    Result findByCode(String code);
}