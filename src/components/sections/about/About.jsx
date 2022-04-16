import { useContext } from "react";
import { Context } from "../../../service/Context";

import AboutStyled from "./About.styles";
import { texts } from "./AboutTexts.json";
import pfp from "../../../assets/graphic/pfp.webp";

const About = () => {
    const { language } = useContext(Context);

    return (
        <AboutStyled>
            <img
                src={pfp}
                alt={texts[language].pfpAlt}
                className="profile-picture"
                width={84}
                height={84}
            />
            <h2>{texts[language].aboutMe}</h2>
            <p>{texts[language].paragraph1}</p>
            <br />
            <p>{texts[language].paragraph2}</p>
        </AboutStyled>
    );
};

export default About;
