package com.sipe.guitar4u.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sipe.guitar4u.domain.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
