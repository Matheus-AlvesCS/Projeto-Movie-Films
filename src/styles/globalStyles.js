import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        font-family: "Montserrat", serif;
    }

    body {
        background-color: #000;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;
