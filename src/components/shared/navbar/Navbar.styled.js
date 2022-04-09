import styled from "styled-components";
import { boxShadow } from "../../../utils/mixins";
import { paddings } from "../../../utils/variables";

const NavbarStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${paddings.mobilePaddingX};

    .logo {
        display: flex;
        align-items: center;
        font-size: 1.3rem;

        svg {
            transform: translateY(-0.2rem);
        }

        p {
            margin-left: 0.35rem;
            color: ${(props) => props.theme.color};
        }
    }

    nav {
        .menu {
            svg {
                color: ${(props) => props.theme.color};
            }
        }

        ul {
            position: relative;

            z-index: 1;
            pointer-events: none;
            position: absolute;
            top: 3.5rem;
            right: ${paddings.mobilePaddingX};

            display: flex;
            flex-direction: column;

            transform-origin: top right;
            transform: scaleY(0) scaleX(0);

            transition: all 0.2s ease-in-out;

            background-color: ${(props) => props.theme.color};
            list-style: none;
            padding: ${paddings.mobilePaddingX};
            color: white;
            line-height: 200%;
            border-radius: 9px;

            &.active {
                transform: scaleY(1) scaleX(1);
                pointer-events: all;
                height: fit-content;
            }
        }
    }
`;

export default NavbarStyled;
