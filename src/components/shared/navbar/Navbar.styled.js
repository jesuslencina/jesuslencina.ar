import styled from "styled-components";
import { cardLike } from "../../../utils/mixins";
import { paddings, breakpoints } from "../../../utils/variables";

const NavbarStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.1rem;

    .logo {
        display: flex;
        align-items: center;
        font-size: 1.3rem;

        svg {
            transform: translateY(-0.1rem);
        }

        p {
            margin-left: 0.35rem;
            color: ${(props) => props.theme.color};
        }
    }

    .hidden-color-switcher {
        position: absolute;
        top: 1.3rem;
        opacity: 0;
    }

    nav {
        .menu {
            svg {
                color: ${(props) => props.theme.color};
            }
        }

        ul {
            position: relative;

            ${cardLike}

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

        .switcher-area {
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

                    border-radius: 4px;

                    ${cardLike}

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
    }

    @media screen and (min-width: ${breakpoints.laptop}) {
        padding: 1.5rem ${paddings.desktopPaddingX};

        .logo {
            p {
                font-size: 1.4rem;
            }

            svg {
                transform: translateY(-0.1rem);
            }
        }

        nav {
            padding-right: 0;

            .menu {
                display: none;
            }

            ul {
                all: unset;

                list-style: none;
                display: flex;
                align-items: center;

                li {
                    all: unset;
                    margin: 0 2rem;
                    color: ${(props) => props.theme.color};
                    cursor: pointer;

                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
    }
`;

export default NavbarStyled;
