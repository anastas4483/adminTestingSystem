import React, { FC, useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table as TableMaterial,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Question, Test } from "../../utils/types/Test";
import { Done, KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

interface RowProp {
  question: Question;
}

const Row: FC<RowProp> = ({ question }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "none" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" align='center'>
          {question.questionId}
        </TableCell>
        <TableCell align='center'>
          {question.title}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <h3>
                Answers
              </h3>
              <TableMaterial size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>№</TableCell>
                    <TableCell>Text</TableCell>
                    <TableCell>Is right</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {question.answers.map((answer) => (
                    <TableRow key={answer.answerId}>
                      <TableCell>{answer.answerId + 1}</TableCell>
                      <TableCell>{answer.title}</TableCell>
                      <TableCell>{answer.isRight && <Done />}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </TableMaterial>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

interface TableProp {
  test: Test;
}

export const Table: FC<TableProp> = ({ test }) => {
  return (
    <TableContainer component={Paper} sx={{ width: 700 }}>
      <TableMaterial aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{ '>*': { fontWeight: 'bold' } }}>
            <TableCell />
            <TableCell align='center'>ID</TableCell>
            <TableCell align='center'>Question text</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {test.questions.map((question) => (
            <Row key={question.questionId} question={question} />
          ))}
        </TableBody>
      </TableMaterial>
    </TableContainer>
  );
};
