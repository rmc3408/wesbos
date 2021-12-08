import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    @font-face {
        font-family: 'radnika';
        src: url('/static/radnika.woff2') format('woff2');
        font-size: medium;
        font-weight: normal;
    }
    html {
        --red: #ff0000;
        --black: #393939;
        --grey: #3A3A3A;
        --lightgrey: #e1e1e1;
        --offwhite: #ededed;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
        box-sizing: border-box;

    }
    body {
        font-family: 'radnika', 'Gill Sans', 'Gill Sans MT',
         Calibri, 'Trebuchet MS', sans-serif;
        padding: 0;
        margin: 0;
        line-height: 2;
        font-size: 1.5rem;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    a {
        text-decoration: none;
        color: var(--black);
        &:hover {
            text-decoration: underline;
        }
    }
    button {
        font-family: 'radnika', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 
        Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;
