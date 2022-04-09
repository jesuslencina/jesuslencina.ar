import styled from "styled-components";
import { paddings } from "../../../utils/variables";

const NavbarStyled = styled.header`
    display: flex;
    justify-content: space-between;
    padding: ${paddings.mobilePaddingX};

    .logo {
        display: flex;
        font-size: 1.3rem;

        svg {
            transform: translateY(-0.1rem);
        }

        p {
            margin-left: 0.35rem;
            color: ${(props) => props.theme.color};
        }
    }
`;

export default NavbarStyled;
