import React, { FC, useState } from "react";
import { Answer as AnswerI } from "../../utils/types/Test";
import { Answer, CollapseAnswersBlock } from "./NewTest.styled";
import { TextField, Button, Collapse, RadioGroup, Radio } from "@mui/material";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

interface CollapseAnswersProp {
  onChangeAnswers: (answers: AnswerI[]) => void;
}

export const CollapseAnswers: FC<CollapseAnswersProp> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [answers, setAnswers] = useState<AnswerI[]>([]);

  //   const onUpdateAnswers = (
  //     id: number,
  //     property: "title" | "isRight",
  //     value: string
  //   ) => {
  //     setAnswers((prev) => {
  //       const newAnswers = [...prev];
  //       //   newAnswers[id][property] = value;
  //       newAnswers[id].answerId = id;
  //       return newAnswers;
  //     });
  //   };
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
          //   onChange={(e, value) => onUpdateAnswers(0, "isRight", value)}
        >
          <Answer>
            <Radio value={0} />
            <TextField
              label="Answer"
              variant="standard"
              //   onChange={(e) => onUpdateAnswers(0, "title", e.target.value)}
              required
            />
          </Answer>
          <Answer>
            <Radio value={1} />
            <TextField
              label="Answer"
              variant="standard"
              required
              //   onChange={(e) => onUpdateAnswers(1, "title", e.target.value)}
            />
          </Answer>
          <Answer>
            <Radio value={2} />
            <TextField
              label="Answer"
              variant="standard"
              required
              //   onChange={(e) => onUpdateAnswers(2, "title", e.target.value)}
            />
          </Answer>
          <Answer>
            <Radio value={3} />
            <TextField
              label="Answer"
              variant="standard"
              required
              //   onChange={(e) => onUpdateAnswers(3, "title", e.target.value)}
            />
          </Answer>
        </RadioGroup>
      </Collapse>
    </CollapseAnswersBlock>
  );
};
