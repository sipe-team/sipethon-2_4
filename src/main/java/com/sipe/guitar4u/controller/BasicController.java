package com.sipe.guitar4u.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import java.util.Map;
import java.util.Map.Entry;
import java.util.Optional;
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
        Map<String, Double> resultMap = new HashMap<>();
        resultMap.put("A", 0.0);
        resultMap.put("B", 0.0);
        resultMap.put("C", 0.0);
        resultMap.put("N", 0.0);
        resultMap.put("S", 0.0);
        resultMap.put("F", 0.0);
        resultMap.put("T", 0.0);
        for (String resultString : resultStrings) {
            switch (resultString) {
                case "A":
                    resultMap.put("A", resultMap.get("A")+1) ;
                    break;
                case "B":
                    resultMap.put("B", resultMap.get("B")+1) ;
                    break;
                case "C":
                    resultMap.put("C", resultMap.get("C")+1) ;
                    break;
                case "N":
                    resultMap.put("N", resultMap.get("N")+0.3) ;
                    break;
                case "S":
                    resultMap.put("S", resultMap.get("S")+0.3) ;
                    break;
                case "T":
                    resultMap.put("T", resultMap.get("T")+0.3) ;
                    break;
                case "F":
                    resultMap.put("F", resultMap.get("F")+0.3) ;
                    break;
            }
        }


        String selectNS = resultMap.get("N") > resultMap.get("S") ? "N" : "S";
        String selectTF = resultMap.get("T") > resultMap.get("F") ? "T" : "F";
        String mbti = selectNS + selectTF;
        Double mbtiScore = 0.0;
        switch (mbti) {
            case "ST":
                mbtiScore = resultMap.get("S") + resultMap.get("T"); //1.2  + 1 2.2
                resultMap.put("A", resultMap.get("A") + mbtiScore);
                break;
            case "SF":
                mbtiScore = resultMap.get("S") + resultMap.get("F");
                resultMap.put("A", resultMap.get("A") + mbtiScore);
                break;
            case "NT":
                mbtiScore = resultMap.get("N") + resultMap.get("T");
                resultMap.put("B", resultMap.get("B") + mbtiScore);
                break;
            case "NF":
                mbtiScore = resultMap.get("N") + resultMap.get("F");
                resultMap.put("C", resultMap.get("C") + mbtiScore);
                break;
        }

        Optional<Entry<String, Double>> recommendGuitar = resultMap.entrySet()
                .stream()
                .max(Map.Entry.comparingByValue());


        Result result = resultRepository.findByCode(recommendGuitar.get().getKey());
        return ResponseEntity.ok().body(result);
    }
}
