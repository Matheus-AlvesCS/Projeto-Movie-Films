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
  height: 50dvh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

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
    height: 15%;
    background-image: linear-gradient(to top, #000000, rgba(0, 0, 0, 0));
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px;
  z-index: 99;
`;

export const Cover = styled.div`
  z-index: 99;
  padding: 20px;

  img {
    width: 350px;
    border-radius: 25px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
  }
`;

export const Info = styled.div`
  color: #fff;
  padding: 20px;
  width: 50%;
  z-index: 99;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 50px;
  }

  p {
    font-weight: 700;
    margin: 30px 0;
  }
`;

export const ContainerTrailers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    margin: 30px 0;
  }

  h4 {
    color: #fff;
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
  }

  iframe {
    border: none;
  }
`;
