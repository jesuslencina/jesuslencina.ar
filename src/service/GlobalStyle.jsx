import { createGlobalStyle } from "styled-components";

import { normalize } from "polished";
import { commonColors } from "../utils/variables";

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

p, a, svg {
    transition: color 0.8s ease-in-out;
}

`;

export default GlobalStyle;
