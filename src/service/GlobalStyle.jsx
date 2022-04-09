import { createGlobalStyle } from "styled-components";

import { normalize } from "polished";
import { commonColors } from "../utils/variables";

const GlobalStyle = createGlobalStyle`

${normalize()}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Outfit, Arial, sans-serif;
    color: ${commonColors.darkGray};
}

`;

export default GlobalStyle;
