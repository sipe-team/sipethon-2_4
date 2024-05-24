package com.sipe.guitar4u.form;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class QuestionForm {

    private String type;
    private String question;
    private ChoiceForm answer1;
    private ChoiceForm answer2;

}
//{
//   "type": "music",
//   "question": "this is question",
//   "answer_1": {
//     "answer": "A1",
// 	"code": "A"
//   },
//   "answer_2": {
//     "answer": "1",
// 	"code": "B"
//   },
// },