package com.sipe.guitar4u.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;

@Getter
@Entity
public class Question {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String type;
    @Column
    private String question;
    @Column(name = "answer1")
    private String answer1;
    @Column(name = "answer1_code")
    private String answer1Code;
    @Column(name = "answer2")
    private String answer2;
    @Column(name = "answer2_code")
    private String answer2Code;


}
