import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        outline: none;
    }
`;

export default GlobalStyle;