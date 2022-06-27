import React, { createContext, useEffect, useState } from "react";
import uniqolor from "uniqolor";

import GlobalStyle from "./GlobalStyle";
import Theme from "./Theme";

export const Context = createContext();

export const ContextWrapper = ({ children }) => {
    const [language, setLanguage] = useState("es");
    const [color, setColor] = useState("gray");

    const getRandomizedColor = () =>
        uniqolor.random({
            lightness: 45,
        }).color;

    useEffect(() => {
        setTimeout(() => setColor(getRandomizedColor()), 600);
    }, [language]);

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
