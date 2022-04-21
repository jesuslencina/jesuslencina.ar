import styled from "styled-components";
import { breakpoints, paddings } from "../../../utils/variables";

const ProjectsStyles = styled.section`
    display: flex;
    flex-direction: column;
    padding: 4vh ${paddings.mobilePaddingX};
    text-align: center;
    position: relative;
    overflow: hidden;

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

    .blob {
        z-index: -1;
        position: absolute;
        right: -10vw;
        top: 30vh;

        path {
            fill: ${(props) => props.theme.color};
            filter: opacity(0.3);
        }
    }
`;

export default ProjectsStyles;
