import styled from "styled-components";

export const Background = styled.div`
  height: 100dvh;
  width: 100dvw;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

export const Container = styled.div`
  background-color: #000;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  max-width: 1200px;
  position: relative;

  span {
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    padding: 5px 10px;
    position: absolute;
    top: 10px;
    right: 10px;
    border: 1px solid #ffffff;
  }

  iframe {
    border: none;
    display: block;
  }
`;
