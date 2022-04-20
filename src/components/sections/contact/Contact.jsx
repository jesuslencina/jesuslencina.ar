import { useContext } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

import { Context } from "../../../service/Context";
import ContactStyled from "./Contact.styles";
import { texts } from "./ExperienceTexts.json";

const Contact = () => {
    const { language } = useContext(Context);

    return (
        <ContactStyled>
            <h2>{texts[language].contact}</h2>
            <div className="container">
                <a
                    className="github"
                    href="https://github.com/jesuslencina"
                    rel="noreferrer"
                    target="_blank">
                    <BsGithub size={32} />
                    Github
                    <BiLinkExternal size={18} />
                </a>

                <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/jesuslencina/"
                    rel="noreferrer"
                    target="_blank">
                    <BsLinkedin size={32} />
                    Linkedin
                    <BiLinkExternal size={18} />
                </a>
            </div>
        </ContactStyled>
    );
};

export default Contact;
