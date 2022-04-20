import { ContextWrapper } from "./service/Context";
import About from "./components/sections/about/About";
import Hero from "./components/sections/hero/Hero";
import Navbar from "./components/shared/navbar/Navbar";
import Projects from "./components/sections/projects/Projects";
import Experience from "./components/sections/experience/Experience";
import Contact from "./components/sections/contact/Contact";
import Footer from "./components/sections/footer/Footer";

const App = () => {
    return (
        <ContextWrapper>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </ContextWrapper>
    );
};

export default App;
