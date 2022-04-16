import styled from "styled-components";
import { breakpoints, paddings } from "../../../utils/variables";

const ProjectsStyles = styled.section`
    display: flex;
    flex-direction: column;
    padding: 4vh ${paddings.mobilePaddingX};
    text-align: center;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (min-width: ${breakpoints.tablet}) {
        padding: 4vh ${paddings.desktopPaddingX};

        .container {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            gap: 4rem;
        }
    }
`;

export default ProjectsStyles;
