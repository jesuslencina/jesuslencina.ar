import { useContext } from "react";
import { ReactSVG } from "react-svg";
import { Context } from "../../../service/Context";
import HeroStyled from "./Hero.styles";
import { texts } from "./Hero.texts.json";
import pcGraphic from "../../../assets/graphic/hero-pc.svg";

const Hero = () => {
    const { language } = useContext(Context);

    return (
        <HeroStyled>
            <ReactSVG
                src={pcGraphic}
                alt={texts[language].graphicAlt}
                className="pc-graphic"
            />
            <div className="text">
                <h1>
                    {texts[language].sloganPart1}{" "}
                    <span>{texts[language].sloganPart2}</span>
                    {texts[language].sloganPart3}{" "}
                    <span>{texts[language].sloganPart4}</span>.
                </h1>
                <p>{texts[language].subSlogan}</p>
            </div>
        </HeroStyled>
    );
};

export default Hero;
