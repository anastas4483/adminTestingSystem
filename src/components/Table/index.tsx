import React, { FC } from "react";
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
  Typography,
  Paper,
} from "@mui/material";
import { Question, Test } from "../../utils/types/Test";
import { Done, KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

interface RowProp {
  question: Question;
}

const Row: FC<RowProp> = ({ question }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
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
        <TableCell component="th" scope="row">
          {question.questionId}
        </TableCell>
        <TableCell>{question.title}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Answers
              </Typography>
              <TableMaterial size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Text</TableCell>
                    <TableCell>Is right</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {question.answers.map((answer) => (
                    <TableRow key={answer.answerId}>
                      <TableCell>{answer.answerId}</TableCell>
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
    </React.Fragment>
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
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell>Question text</TableCell>
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
