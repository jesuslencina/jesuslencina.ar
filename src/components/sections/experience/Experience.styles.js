import styled from "styled-components";
import { breakpoints, paddings } from "../../../utils/variables";

const ExperienceStyled = styled.section`
    padding: 4vh ${paddings.mobilePaddingX};

    position: relative;
    overflow: hidden;

    .container {
        display: flex;
        flex-direction: column;
        gap: 4vh;
    }

    h2 {
        text-align: center;
        margin-bottom: 4vh;
    }

    .blob {
        z-index: -1;
        position: absolute;
        left: -25vw;
        top: -5vh;

        display: none;

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
    }
`;

export default ExperienceStyled;
