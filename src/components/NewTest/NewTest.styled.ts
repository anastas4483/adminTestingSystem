import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e2c084;
  padding: 20px 5px;
  border-radius: 5px;
  gap: 10px;
  width: 250px;
`;
interface InputProp {
  redBorder: boolean;
}

export const Input = styled.input<InputProp>`
  border-radius: 5px;
  border: ${({ redBorder }) => (redBorder ? "1px solid red" : "none")};
  padding: 5px;
  font-size: 17px;
  outline: none;
  width: 80%;
`;

export const SubmitBtn = styled.button`
  background: #c09f4b;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
`;

export const InfoBlock = styled.span`
  color: #f00;
  font-size: 13px;
`;
export const QuestionBlock = styled.div`
  padding: 20px;
  display: flex;
  gap: 15px;
  align-items: flex-start;
  flex-direction: column;
`;
export const Answer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;
`;
export const CollapseAnswersBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`;
export const Info = styled.div`
  background-color: #ffff0021;
  color: #666;
  border-radius: 20px;
  padding: 5px 10px;
  border: 2px solid #fff800;
`;
export const TitleQuestion = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;
export const NewTestBlock = styled.div`
  width: 500px;
`;
export const AddQuestion = styled.div`
  display: flex;
  gap: 10px;
`;
export const MainBlock = styled.div`
  display: flex;
  gap: 10px;
`;
