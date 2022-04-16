import styled from "styled-components";
import { paddings, breakpoints } from "../../../utils/variables";

const HeroStyled = styled.section`
    height: 90vh;

    display: grid;
    grid-template-rows: 30% 70%;

    padding: 15vh ${paddings.mobilePaddingX};

    .pc-graphic {
        display: grid;
        width: 6rem;
        transform: translate(-1.3rem, 1.5rem);

        .fill-me {
            transition: fill 1s ease-in-out;
            fill: ${(props) => props.theme.color};
            filter: opacity(0.4);
        }
    }

    .text {
        width: 90%;

        h1 {
            color: ${(props) => props.theme.color};

            span {
                color: white;
                background-color: ${(props) => props.theme.color};
                padding: 0 0.3rem;
            }
        }
    }

    .wavy-mobile {
        z-index: -1;
        position: absolute;
        left: 0;
        top: 15.5vh;
        width: 100%;

        path {
            fill: ${(props) => props.theme.color};
            filter: opacity(0.3);
        }
    }

    .wavy-desktop {
        display: none;
    }

    @media screen and (min-width: ${breakpoints.laptop}) {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        padding: 16rem;

        overflow: hidden;

        .text {
            h1 {
                font-size: 3rem;
            }
        }

        .pc-graphic {
            width: 34rem;
        }

        .wavy-mobile {
            display: none;
        }

        .wavy-desktop {
            display: block;
            right: 0;
            z-index: -1;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;

            path {
                fill: ${(props) => props.theme.color};
                filter: opacity(0.3);
            }
        }
    }
`;

export default HeroStyled;
