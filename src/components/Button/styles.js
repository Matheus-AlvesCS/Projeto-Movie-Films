import styled from "styled-components";

export const InfoButton = styled.button`
  background-color: ${(props) =>
    props.$button === 1 ? "#FF0000" : "transparent"};
  box-shadow: ${(props) => props.$button === 1 && "0px 0px 15px 8px #FF0000"};
  border: 2px solid
    ${(props) => (props.$button === 1 ? "transparent" : "#FFFFFF")};
  color: #ffffff;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.$button !== 1 && "#FFFFFF"};
    color: ${(props) => props.$button !== 1 && "#FF0000"};
    box-shadow: ${(props) =>
      props.$button === 1 && "0px 0px 15px 10px #FF0000"};
  }
`;
