import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ArtistPalette } from "twemazing";
import { RiMenu3Line } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

import { Context } from "../../../service/Context";
import NavbarStyled from "./Navbar.styled";
import { texts } from "./Navbar.texts.json";

const Navbar = () => {
    const { language, switchLang } = useContext(Context);

    const [open, setOpen] = useState(false);

    return (
        <NavbarStyled>
            <Link to="/" className="logo">
                <ArtistPalette size={1.6} rem />
                <p>{texts[language].myName}</p>
            </Link>
        </NavbarStyled>
    );
};

export default Navbar;
