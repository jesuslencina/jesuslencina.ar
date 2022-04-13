import styled from "styled-components";
import { lighten } from "polished";
import { paddings } from "../../../utils/variables";

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
            line-height: 150%;
            color: ${(props) => props.theme.color};

            span {
                color: white;
                background-color: ${(props) => props.theme.color};
                padding: 0 0.3rem;
            }
        }

        p {
            font-size: 1.25rem;
        }
    }
`;

export default HeroStyled;
