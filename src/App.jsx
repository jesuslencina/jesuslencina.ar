import About from "./components/sections/about/About";
import Hero from "./components/sections/hero/Hero";
import Navbar from "./components/shared/navbar/Navbar";
import { ContextWrapper } from "./service/Context";

const App = () => {
    return (
        <ContextWrapper>
            <Navbar />
            <Hero />
            <About />
        </ContextWrapper>
    );
};

export default App;
