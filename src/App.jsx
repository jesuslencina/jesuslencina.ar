import Navbar from "./components/shared/navbar/Navbar";
import { ContextWrapper } from "./service/Context";

const App = () => {
    return (
        <ContextWrapper>
            <Navbar />
        </ContextWrapper>
    );
};

export default App;
