import { useContext } from "react";
import { ReactSVG } from "react-svg";

import { Context } from "../../../service/Context";
import ExperienceStyled from "./Experience.styles";
import { texts } from "./ExperienceTexts.json";
import { experience } from "./data/ExperienceList.json";
import ExperienceItem from "./components/ExperienceItem";

import Blob2 from "../../../assets/graphic/blob2.svg";

const Experience = () => {
    const { language } = useContext(Context);

    return (
        <ExperienceStyled className="experience">
            <h2>{texts[language].experience}</h2>
            <div className="container">
                {experience.map((item, index) => (
                    <ExperienceItem key={index} language={language} {...item} />
                ))}
            </div>

            <ReactSVG src={Blob2} className="blob" />
        </ExperienceStyled>
    );
};

export default Experience;
