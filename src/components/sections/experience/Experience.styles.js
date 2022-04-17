import styled from "styled-components";
import { breakpoints, paddings } from "../../../utils/variables";

const ExperienceStyled = styled.section`
    padding: 4vh ${paddings.mobilePaddingX};

    .container {
        display: flex;
        flex-direction: column;
        gap: 4vh;
    }

    h2 {
        text-align: center;
        margin-bottom: 4vh;
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
