import React, { FC, useState } from "react";
import { Answer, Question, Test } from "../../utils/types/Test";
import {
  AddQuestion,
  Info,
  MainBlock,
  NewTestBlock,
  QuestionBlock,
  TitleQuestion,
} from "./NewTest.styled";
import { TextField, Button, FormControl } from "@mui/material";
import { CollapseAnswers } from "./CollapseAnswers";

interface NewTestProp {
  onCreate: (test: Test) => void;
  onCancel: () => void;
  newTestId: number;
}

export const NewTest: FC<NewTestProp> = ({ onCreate, onCancel, newTestId }) => {
  const [test, setTest] = useState<Test>({
    title: "",
    questions: [],
    id: newTestId,
  });

  const onAddQuestion = (id: number) => {
    const newQuetion: Question = {
      title: "",
      questionId: id,
      answers: [],
    };
    setTest((prev) => ({
      ...prev,
      questions: [...prev.questions, newQuetion],
    }));
  };

  const onChangeQuestionTitle = (idQuestion: number, title: string) => {
    setTest((prev) => {
      const newQuestions = [...prev.questions];
      newQuestions[idQuestion].title = title;
      return {
        ...prev,
        questions: newQuestions,
      };
    });
  };

  const onChangeAnswers = (idQuestion: number, answers: Answer[]) => {
    setTest((prev) => {
      const newQuestions = [...prev.questions];
      newQuestions[idQuestion].answers = answers;
      return {
        ...prev,
        questions: newQuestions,
      };
    });
  };
  return (
    <NewTestBlock>
      <FormControl>
        <MainBlock>
          <TextField
            label="Title test"
            onChange={(e) =>
              setTest((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            sx={{ width: "80%" }}
            variant="standard"
            required
          />
          <Button
            variant="contained"
            color="success"
            onClick={() => onCreate(test)}
          >
            Save
          </Button>
          <Button variant="contained" color="error" onClick={onCancel}>
            Cancel
          </Button>
        </MainBlock>
        <QuestionBlock>
          <TitleQuestion>
            {!(test.questions.length < 16 && test.questions.length > 3) && (
              <Info>Test must includes 4 to 15 questions </Info>
            )}
            {test.questions.length < 16 && (
              <Button
                variant="contained"
                onClick={() => onAddQuestion(test.questions.length)}
              >
                add
              </Button>
            )}
          </TitleQuestion>

          {test.questions.map((question) => (
            <AddQuestion key={question.questionId}>
              <TextField
                required
                label="Your question"
                variant="standard"
                sx={{ width: "66%" }}
                onChange={(e) =>
                  onChangeQuestionTitle(question.questionId, e.target.value)
                }
              />
              <CollapseAnswers
                onChangeAnswers={(answers: Answer[]) =>
                  onChangeAnswers(question.questionId, answers)
                }
              />
            </AddQuestion>
          ))}
        </QuestionBlock>
      </FormControl>
    </NewTestBlock>
  );
};
