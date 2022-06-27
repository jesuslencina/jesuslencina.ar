import { useContext, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link as ScrollLink } from "react-scroll";

import { RiMenu3Line } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import { AiFillCaretDown } from "react-icons/ai";

import palette from "../../../assets/graphic/palette.svg";
import argentina from "../../../assets/graphic/flags/argentina.svg";
import usa from "../../../assets/graphic/flags/usa.svg";
import france from "../../../assets/graphic/flags/france.svg";

import { Context } from "../../../service/Context";
import NavbarStyled from "./Navbar.styled";
import { texts } from "./Navbar.texts.json";
import { ReactSVG } from "react-svg";

const Navbar = () => {
    const { language, setLanguage, setColor } = useContext(Context);

    const colorInput = useRef(null);

    const [open, setOpen] = useState(false);

    const [langSwitcherOpen, setLangSwitcherOpen] = useState(false);

    const switchOpen = () => setOpen(!open);

    const switchLangSwitcher = () => setLangSwitcherOpen(!langSwitcherOpen);

    return (
        <>
            <Helmet>
                <title>{texts[language].myName}</title>
            </Helmet>
            <NavbarStyled>
                <div
                    className="logo"
                    onClick={() => colorInput.current.click()}>
                    <ReactSVG src={palette} scale={1.6} className="palette" />
                    <p>{texts[language].myName}</p>
                </div>

                <input
                    type="color"
                    ref={colorInput}
                    className="hidden-color-switcher"
                    onInput={(e) => setColor(e.target.value)}
                />

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
                            <ScrollLink smooth to="about">
                                {texts[language].about}
                            </ScrollLink>
                        </li>

                        <li>
                            <ScrollLink smooth to="projects">
                                {texts[language].projects}
                            </ScrollLink>
                        </li>

                        <li>
                            <ScrollLink smooth to="experience">
                                {texts[language].experience}
                            </ScrollLink>
                        </li>

                        <li>
                            <ScrollLink smooth to="connect">
                                {texts[language].connect}
                            </ScrollLink>
                        </li>

                        <li className="switcher-area">
                            <div className="lang-switcher">
                                <div
                                    className={`flag-container ${
                                        langSwitcherOpen && "active"
                                    }`}
                                    onClick={switchLangSwitcher}>
                                    {language === "en" ? (
                                        <ReactSVG src={usa} size="30" />
                                    ) : language === "es" ? (
                                        <ReactSVG src={argentina} width="30" />
                                    ) : (
                                        <ReactSVG src={france} width="30" />
                                    )}

                                    <AiFillCaretDown
                                        size="14"
                                        className="triangle"
                                    />
                                </div>
                                <div
                                    className={`select-area ${
                                        langSwitcherOpen && "active"
                                    }`}>
                                    <div
                                        className={` flag-wrapper ${
                                            language === "es" && "active"
                                        }`}
                                        onClick={() => setLanguage("es")}>
                                        <ReactSVG
                                            src={argentina}
                                            width="30"
                                            className={
                                                language === "es" && "active"
                                            }
                                            onClick={() => setLanguage("es")}
                                        />
                                    </div>

                                    <div
                                        className={` flag-wrapper ${
                                            language === "en" && "active"
                                        }`}
                                        onClick={() => setLanguage("en")}>
                                        <ReactSVG src={usa} width="30" />
                                    </div>

                                    <div
                                        className={` flag-wrapper ${
                                            language === "fr" && "active"
                                        }`}
                                        onClick={() => setLanguage("fr")}>
                                        <ReactSVG src={france} width="30" />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </NavbarStyled>{" "}
        </>
    );
};

export default Navbar;
