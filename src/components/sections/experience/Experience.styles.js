import styled from "styled-components";
import { breakpoints, paddings } from "../../../utils/variables";

const ExperienceStyled = styled.section`
    padding: 4vh ${paddings.mobilePaddingX};

    position: relative;
    overflow: hidden;

    .container {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    h2 {
        text-align: center;
        margin-bottom: 4vh;
    }

    .blob {
        z-index: -1;
        position: absolute;
        left: -25vw;
        top: 20vh;

        path {
            fill: ${(props) => props.theme.color};
            filter: opacity(0.3);
        }
    }

    @media screen and (min-width: ${breakpoints.tablet}) {
        padding: 4vh ${paddings.desktopPaddingX};

        .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .blob {
            transform: scale(1.2);
            left: -8vw;
            top: 20vh;
        }
    }
`;

export default ExperienceStyled;
