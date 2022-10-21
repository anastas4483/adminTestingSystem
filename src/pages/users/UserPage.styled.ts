import styled from "styled-components";
import searchSvg from "../../assets/svgs/search.svg";

export const Blocks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const MainTitle = styled.h1`
  color: #7600b0;
`;
export const ListBlock = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const InfoBlock = styled.div`
  color: #ccc;
`;
export const UserItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 7px;
  transition: all ease 0.3s;
  border-radius: 5px;
  cursor: pointer;

  :nth-child(1) {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    cursor: default;
    :hover {
      background: none;
    }
  }

  :hover {
    transition: all ease 0.3s;
    background: rgb(0, 255, 209);
    background: linear-gradient(
      36deg,
      rgba(0, 255, 209, 1) 0%,
      rgba(0, 51, 112, 1) 22%,
      rgba(76, 117, 205, 1) 42%,
      rgba(74, 168, 217, 1) 63%,
      rgba(83, 218, 212, 1) 81%,
      rgba(255, 255, 255, 1) 98%
    );
  }
`;
export const SearchUser = styled.input`
  border: none;
  padding: 10px 5px 10px 10px;
  font-size: 17px;
  outline: none;
`;
export const SearchUserWrapper = styled.div`
  width: fit-content;
  padding-right: 10px;
  border-bottom: 1px solid #ccc;
  ::after {
    content: url(${searchSvg});
  }
`;
export const UsersTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
