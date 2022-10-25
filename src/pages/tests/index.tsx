import { Autocomplete, TextField } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { tests as testsDefault } from "../../assets/data/tests";
import { Table } from "../../components/Table";
import { Test } from "../../utils/types/Test";
import Switch from "@mui/material/Switch";
import {
  ActionBlock,
  ShowBlock,
  SwitchBlock,
  TestInfo,
  TestTitle,
} from "./TestPage.styled";
import Button from "@mui/material/Button";
import { NewTest } from "../../components/NewTest";

export const TestsPage: FC = () => {
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);
  const [isHideTest, setIsHideTest] = useState<boolean>(false);
  const [tests, setTests] = useState<Test[]>(testsDefault);
  const [isCreatingNewTest, setIsCreatingNewTest] = useState<boolean>(false);

  useEffect(() => {
    setIsHideTest(selectedTest?.isHide ?? false);
  }, [selectedTest]);

  const onDeleteTest = (id: number) => {
    setTests((prev) => prev.filter((test) => test.id !== id));
    if (selectedTest?.id === id) {
      setSelectedTest(null);
    }
  };

  const onCreateNewTest = (test: Test) => {
    setTests((prev) => [...prev, test]);
    setIsCreatingNewTest(false);
  };

  const onCancelCreateNewTest = () => {
    setIsCreatingNewTest(false);
  };

  return (
    <div>
      <ActionBlock>
        <Autocomplete
          sx={{ width: 300 }}
          options={tests}
          value={selectedTest}
          getOptionLabel={(option) => option.title}
          onChange={(e, value) => setSelectedTest(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Tests"
              placeholder={"Choose the test"}
            />
          )}
        />

        {!isCreatingNewTest && (
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            onClick={() => setIsCreatingNewTest(true)}
          >
            create new test
          </Button>
        )}
        {selectedTest && (
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            color="error"
            onClick={() => onDeleteTest(selectedTest.id)}
          >
            delete SELECTED test
          </Button>
        )}
      </ActionBlock>

      {isCreatingNewTest && (
        <NewTest
          onCreate={onCreateNewTest}
          onCancel={onCancelCreateNewTest}
          newTestId={tests.length}
        />
      )}

      {selectedTest && (
        <TestInfo>
          <span>
            <TestTitle>{selectedTest.title}</TestTitle>
            <ShowBlock>
              Shall this test show for user? <br />
              <SwitchBlock>
                no
                <Switch
                  checked={!isHideTest}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setIsHideTest(!e.target.checked)
                  }
                />
                yes
              </SwitchBlock>
            </ShowBlock>
          </span>
          <Table test={selectedTest} />
        </TestInfo>
      )}
    </div>
  );
};
