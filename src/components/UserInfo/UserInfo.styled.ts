import styled from "styled-components";
import Arrow from "../../assets/svgs/arrowDown.svg";

export const AttemptList = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding: 15px 0;
`;

interface InfoProp {
  isShow?: boolean;
}

export const TestPreview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #cccccc63;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;

export const TestInfo = styled.div<InfoProp>`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  padding: 5px;
`;

export const AttemptPreview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #cccccc63;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;

export const AttemptInfo = styled.div<InfoProp>`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  padding: 5px;
`;

export const Property = styled.div`
  color: #fff;
`;
export const Value = styled.span`
  font-weight: bold;
  color: #edb169;
`;
export const Name = styled.div`
  text-align: center;
  font-size: 20px;
  border-bottom: 1px solid #fff;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;
export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PassedTestBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #000000a1;
  border-radius: 5px;
  padding: 13px;
  margin: 5px 0;
`;
export const TitleAttempts = styled.div`
  font-weight: bold;
  font-style: italic;
  margin-top: 10px;
`;
