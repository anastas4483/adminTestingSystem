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
