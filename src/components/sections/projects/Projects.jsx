import { useContext } from "react";
import { Context } from "../../../service/Context";
import ProjectsStyles from "./Projects.styles";
import { projects } from "./data/Projects.json";
import { texts } from "./Projects.texts.json";
import ProjectItem from "./components/ProjectItem";

const Projects = () => {
    const { language } = useContext(Context);

    return (
        <ProjectsStyles className="projects">
            <h2>{texts[language].projects}</h2>
            <div className="container">
                {projects.map((project, index) => (
                    <ProjectItem
                        key={index}
                        {...project}
                        viewText={texts[language].view}
                    />
                ))}
            </div>
        </ProjectsStyles>
    );
};

export default Projects;
