import { useContext } from "react";
import { Context } from "./Context";
import { ThemeProvider } from "styled-components";

const Theme = ({ children }) => {
    const { color } = useContext(Context);

    return (
        <ThemeProvider
            theme={{
                color: color,
            }}>
            {children}
        </ThemeProvider>
    );
};

export default Theme;
