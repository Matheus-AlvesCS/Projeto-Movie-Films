import styled, { keyframes } from "styled-components";

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.$img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    background-image: linear-gradient(to top, #000000, rgba(0, 0, 0, 0));
  }
`;

export const Main = styled.main`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  max-width: 1500px;
`;

export const Info = styled.div`
  color: #fff;
  max-width: 50%;
  padding: 5px;

  h1 {
    font-size: 5rem;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    margin: 20px 0 30px;
  }

  div {
    display: flex;
    gap: 25px;
  }
`;

export const Poster = styled.div`
  img {
    width: 350px;
    border-radius: 25px;
    animation: ${scale} 0.5s linear;
  }
`;
