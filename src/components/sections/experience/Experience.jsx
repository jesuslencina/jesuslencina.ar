import { useContext } from "react";

import { Context } from "../../../service/Context";
import ExperienceStyled from "./Experience.styles";
import { texts } from "./ExperienceTexts.json";
import { experience } from "./data/ExperienceList.json";
import ExperienceItem from "./components/ExperienceItem";

const Experience = () => {
    const { language } = useContext(Context);

    return (
        <ExperienceStyled>
            <h2>{texts[language].experience}</h2>
            <div className="container">
                {experience.map((item, index) => (
                    <ExperienceItem key={index} {...item} />
                ))}
            </div>
        </ExperienceStyled>
    );
};

export default Experience;
