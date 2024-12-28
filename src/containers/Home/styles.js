import styled from "styled-components";

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
`;

export const Main = styled.main`
  z-index: 99;
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
  }
`;