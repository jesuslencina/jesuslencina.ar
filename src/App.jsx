import { ContextWrapper } from "./service/Context";
import About from "./components/sections/about/About";
import Hero from "./components/sections/hero/Hero";
import Navbar from "./components/shared/navbar/Navbar";
import Projects from "./components/sections/projects/Projects";
import Experience from "./components/sections/experience/Experience";

const App = () => {
    return (
        <ContextWrapper>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Experience />
        </ContextWrapper>
    );
};

export default App;
