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
            justify-content: space-between;
            align-items: center;
            gap: 4rem;
            flex-wrap: wrap;
        }
    }

    .blob {
        z-index: -1;
        position: absolute;
        transform: scale(0.65);
        right: -15vw;
        top: -8vh;

        path {
            fill: ${(props) => props.theme.color};
            filter: opacity(0.3);
        }
    }

    @media screen and (min-width: ${breakpoints.laptop}) {
        .container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;

export default ProjectsStyles;
