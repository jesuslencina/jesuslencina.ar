import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Navbar from "./components/shared/navbar/Navbar";
import { ContextWrapper } from "./service/Context";

const App = () => {
    return (
        <ContextWrapper>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    {/*   <Route exact path="/" element={<Landing />} /> */}
                </Switch>
            </BrowserRouter>
        </ContextWrapper>
    );
};

export default App;
