import React, { createContext, useState } from "react";

import GlobalStyle from "./GlobalStyle";
import Theme from "./Theme";
import { defaultColors } from "../utils/defaultColors";

export const Context = createContext();

export const ContextWrapper = ({ children }) => {
    const [language, setLanguage] = useState("en");
    const [color, setColor] = useState(defaultColors.bubblegum);

    return (
        <Context.Provider
            value={{
                language,
                setLanguage,
                color,
                setColor,
            }}>
            <Theme>
                <GlobalStyle />
                <div className="app-container">{children}</div>
            </Theme>
        </Context.Provider>
    );
};
