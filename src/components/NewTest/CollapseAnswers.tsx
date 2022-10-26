import React, { FC, useEffect, useState } from "react";
import { Answer as AnswerI } from "../../utils/types/Test";
import { Answer, CollapseAnswersBlock } from "./NewTest.styled";
import { TextField, Button, Collapse, RadioGroup, Radio } from "@mui/material";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

interface CollapseAnswersProp {
  onChangeAnswers: (answers: AnswerI[]) => void;
}

export const CollapseAnswers: FC<CollapseAnswersProp> = ({onChangeAnswers}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [answers, setAnswers] = useState<AnswerI[]>([]);

  useEffect(()=>{
    onChangeAnswers(answers)
  },[answers])

  const onUpdateAnswerTitle = (id: number,  value: string) => {
    setAnswers(prev => {
      const newAnswers = [...prev]
      if (!newAnswers[id]) newAnswers[id] = { title: '', answerId: id }
      newAnswers[id].title = value
      return newAnswers
    })
  }
  const onUpdateAnswerIsRight = (id: number) => {
    setAnswers(prev => {
      const newAnswers = prev.map(answer=> {
        const newAnswer= {...answer} 
        delete newAnswer.isRight
        return newAnswer
      })
      if (!newAnswers[id]) newAnswers[id] = { title: '', answerId: id }
      newAnswers[id].isRight = true
      return newAnswers
    })
  }
  return (
    <CollapseAnswersBlock>
      <Button onClick={() => setOpen((prev) => !prev)}>
        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />} Answers
      </Button>
      <Collapse in={open} timeout="auto">
        Select the right one
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={(e, value) => onUpdateAnswerIsRight(Number(value))}
        >
          <Answer>
            <Radio value={0} />
            <TextField
              label="Answer"
              variant="standard"
              onChange={(e) => onUpdateAnswerTitle(0,  e.target.value)}
              required
            />
          </Answer>
          <Answer>
            <Radio value={1} />
            <TextField
              label="Answer"
              variant="standard"
              required
              onChange={(e) => onUpdateAnswerTitle(1, e.target.value)}
            />
          </Answer>
          <Answer>
            <Radio value={2} />
            <TextField
              label="Answer"
              variant="standard"
              required
              onChange={(e) => onUpdateAnswerTitle(2, e.target.value)}
            />
          </Answer>
          <Answer>
            <Radio value={3} />
            <TextField
              label="Answer"
              variant="standard"
              required
              onChange={(e) => onUpdateAnswerTitle(3, e.target.value)}
            />
          </Answer>
        </RadioGroup>
      </Collapse>
    </CollapseAnswersBlock>
  );
};
