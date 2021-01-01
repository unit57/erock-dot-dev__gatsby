import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --red: #FF4949;
        --black: #2E2E2E;
        --yellow: #ffc600;
        --white: #fff;
        --grey: #efefef;
    }
    html {
        font-size: 10px;
    }
    body {
        font-size: 2rem;
    }
    img {
        max-width: 100%;
    }
    button, button:focus{
        outline: none;
        background: transparent;
        border: 1px solid transparent;
    }

    button:active{
        outline: none;
        background: transparent;
        border: 1px solid var(--grey);
    }      
`;

export default GlobalStyles;
