import { useContext, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArtistPalette } from "twemazing";
import { RiMenu3Line } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

import { Context } from "../../../service/Context";
import NavbarStyled from "./Navbar.styled";
import { texts } from "./Navbar.texts.json";

const Navbar = () => {
    const { language, switchLang } = useContext(Context);

    const [open, setOpen] = useState(false);

    const switchOpen = () => setOpen(!open);

    return (
        <NavbarStyled>
            <div className="logo">
                <ArtistPalette size={1.6} rem />
                <p>{texts[language].myName}</p>
            </div>

            <nav>
                <div onClick={switchOpen} className="menu">
                    {!open ? (
                        <RiMenu3Line size={26} className="bars" />
                    ) : (
                        <VscChromeClose size={26} className="cross" />
                    )}
                </div>

                <ul className={open ? "active" : null}>
                    <li>
                        <ScrollLink to="about">
                            {texts[language].about}
                        </ScrollLink>
                    </li>

                    <li>
                        <ScrollLink to="projects">
                            {texts[language].projects}
                        </ScrollLink>
                    </li>

                    <li>
                        <ScrollLink to="experience">
                            {texts[language].experience}
                        </ScrollLink>
                    </li>

                    <li>
                        <ScrollLink to="contact">
                            {texts[language].contact}
                        </ScrollLink>
                    </li>
                </ul>
            </nav>
        </NavbarStyled>
    );
};

export default Navbar;
