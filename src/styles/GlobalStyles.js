import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import './GlobalFont.css';
const GlobalStyle = createGlobalStyle`
    ${reset};
    :root {
       --vh: 100%;
    }
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR';
        height: var(--vh);
    };
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
        font-family: 'Noto Sans KR';
    }
    input, textarea {
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }
    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
    li {
    list-style: none;
    }
`;
export default GlobalStyle;
