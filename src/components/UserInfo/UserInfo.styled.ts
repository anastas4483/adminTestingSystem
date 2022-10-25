import styled from "styled-components";
import Arrow from "../../assets/svgs/arrowDown.svg";

export const AttemptList = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding: 15px;
`;

interface AttempProp {
  isShow?: boolean;
}

export const AttemptPreview = styled.div<AttempProp>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #cccccc63;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;

  ::after {
    content: url(${Arrow});
    transform: ${({ isShow }) => (isShow ? "rotate(180deg)" : "rotate(0)")};
  }
`;

export const AttemptInfo = styled.div<AttempProp>`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  padding: 5px;
`;

export const Property = styled.div`
  color: #ff0;
`;
export const Value = styled.span`
  font-weight: bold;
`;
export const Name = styled.div`
  text-align: center;
  font-size: 20px;
  border-bottom: 1px solid #fff;
  padding-bottom: 5px;
`;
export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
