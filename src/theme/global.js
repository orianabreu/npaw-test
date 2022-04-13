import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        min-height: 100vh;
        background: rgb(255,87,34);
        background: linear-gradient(138deg, rgba(255,87,34,1) 0%, rgba(240,98,146,1) 50%);
    }
`;

export default GlobalStyle;
