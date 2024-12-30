import styled from "styled-components";

export const Container = styled.header`
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 30px;
  background-color: ${(props) => props.$pagey >= 150 && "rgba(0, 0, 0, 0.8)"};
  transition: background-color 0.5s ease-in-out;

  img {
    width: 100px;
    border-radius: 15px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`;

export const Li = styled.li`
  position: relative;

  a {
    color: #ffffff;
    font-size: 28px;
    font-weight: 700;
  }

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: ${(props) => (props.$active ? "100%" : "0%")};
    background-color: #ffb800;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
