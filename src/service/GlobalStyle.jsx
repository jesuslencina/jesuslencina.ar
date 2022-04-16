import { createGlobalStyle } from "styled-components";

import { normalize } from "polished";
import { commonColors, breakpoints } from "../utils/variables";

const GlobalStyle = createGlobalStyle`

${normalize()}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}

body {
    margin: 0;
    font-family: Outfit, Arial, sans-serif;
    color: ${commonColors.darkGray};
}

a {
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
}

h1, h2, p, a, svg, span {
    transition: background-color 2s ease-in-out, color 2s ease-in-out;
}

path {
    transition: fill 2.2s ease-in-out
}

h1, h2, p, a {
    line-height: 175%; 

    @media screen and (min-width: ${breakpoints.laptop}){
        line-height: 200%; 
    }
}

h2 {
    font-size: 2rem;
    color: ${(props) => props.theme.color}
}


p, a {
    font-size: 1.25rem;

    @media screen and (min-width: ${breakpoints.laptop}){
        font-size: 1.5rem;
    }
}

`;

export default GlobalStyle;
