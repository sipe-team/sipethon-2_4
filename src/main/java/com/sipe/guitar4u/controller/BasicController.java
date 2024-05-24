package com.sipe.guitar4u.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sipe.guitar4u.domain.Question;
import com.sipe.guitar4u.domain.Result;
import com.sipe.guitar4u.domain.User;
import com.sipe.guitar4u.form.ChoiceForm;
import com.sipe.guitar4u.form.ChoiceResult;
import com.sipe.guitar4u.form.QuestionForm;
import com.sipe.guitar4u.form.UserForm;
import com.sipe.guitar4u.repository.QuestionRepository;
import com.sipe.guitar4u.repository.ResultRepository;
import com.sipe.guitar4u.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("api")
public class BasicController {

    private final UserRepository userRepository;
    private final QuestionRepository questionRepository;
    private final ResultRepository resultRepository;

    @GetMapping("health-check2")
    public Object healthCheck() {
        return "Guitar 4 u";
    }

    @GetMapping("user")
    public ResponseEntity<List<UserForm>> getUsers() {
        List<User> all = userRepository.findAll();
        List<UserForm> result = new ArrayList<>();
        for (User user : all) {
            UserForm userForm = new UserForm(user.getUserName());
            result.add(userForm);
        }
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("questions")
    public ResponseEntity<List<QuestionForm>> getQuestions() {
        List<QuestionForm> result = new ArrayList<>();
        for (Question q : questionRepository.findAll()) {
            ChoiceForm choiceForm1 = new ChoiceForm(q.getAnswer1(), q.getAnswer1Code());
            ChoiceForm choiceForm2 = new ChoiceForm(q.getAnswer2(), q.getAnswer2Code());
            QuestionForm questionForm = new QuestionForm(q.getType(), q.getQuestion(), choiceForm1, choiceForm2);
            result.add(questionForm);
        }
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("result")
    public ResponseEntity<Result> getResult(@RequestBody ChoiceResult choiceResult) {
        List<String> resultStrings = choiceResult.getChoiceResult();
        for (String resultString : resultStrings) {
            switch (resultString) {
                case "A":
                    break;
                case "B":
                    break;
                case "C":
                    break;
                case "N":
                    break;
                case "S":
                    break;
                case "T":
                    break;
                case "F":
                    break;
            }
        }
        Result result = resultRepository.findByCode("A");
        return ResponseEntity.ok().body(result);
    }
}
