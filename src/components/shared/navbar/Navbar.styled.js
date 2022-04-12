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

            ${boxShadow}
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

            color: ${(props) => props.theme.color};

            list-style: none;

            line-height: 200%;
            border-radius: 9px;

            width: 40vw;

            li {
                padding: 0.5rem 1rem;
                border-bottom: 1pt solid ${(props) => props.theme.color};

                &:last-of-type {
                    border-bottom: none;
                }
            }

            &.active {
                transform: scaleY(1) scaleX(1);
                pointer-events: all;
                height: fit-content;
            }
        }

        .lang-switcher {
            position: relative;

            .flag-container {
                width: fit-content;
                padding: 0.05rem 0.2rem;
                border-radius: 7px;
                display: flex;
                align-items: center;
                gap: 0.2rem;
                border: 1pt solid ${(props) => props.theme.color};

                transition: background-color 0.5s ease-in-out;

                .triangle {
                    transition: transform 0.5s ease-in-out;
                }

                &.active {
                    background-color: ${(props) => props.theme.color};

                    .triangle {
                        fill: white;
                        transform: rotate(-180deg);
                    }
                }
            }

            .select-area {
                position: absolute;
                transform: scaleY(0);
                top: 2.5rem;
                left: 0.25rem;

                display: flex;
                flex-direction: column;

                pointer-events: none;

                transform-origin: top;
                transition: all 0.25s ease-in-out;

                padding: 0.25rem;
                background-color: white;
                border-radius: 4px;
                ${boxShadow}

                &.active {
                    pointer-events: all;
                    transform: scaleY(1);
                }

                .active svg {
                    filter: saturate(0.25);
                }
            }
        }
    }
`;

export default NavbarStyled;
