import styled from "styled-components";
import { boxShadow } from "../../../../utils/mixins";
import { breakpoints } from "../../../../utils/variables";

const ProjectItemStyled = styled.article`
    width: 85%;
    margin: 2rem 0;
    background-color: white;
    display: grid;
    grid-template-rows: 12rem 1fr;
    text-align: center;
    position: relative;
    border-radius: 5px;
    ${boxShadow}

    .category {
        position: absolute;
        top: 0;
        left: 0.75rem;
        margin: 0;
        padding: 0.05rem 0.5rem;
        background-color: ${(props) => props.accent};
        color: white;
        font-weight: bold;
        font-size: 1rem;
        text-transform: uppercase;
        border-radius: 0 0 5px 5px;
    }

    .cover {
        object-fit: cover;
        border-radius: 5px 5px 0 0;
        border-bottom: 2pt solid ${(props) => props.accent};
    }

    .time {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.25rem 0;
        font-size: 1rem;

        svg {
            margin-right: 0.5rem;
        }
    }

    h2 {
        color: ${(props) => props.accent};
        margin: 0;
        font-size: 1.8rem;
    }

    .links {
        display: flex;
        justify-content: center;
        margin: 1rem 0;

        a {
            margin: 0 0.5rem;
            font-size: 1rem;
            display: flex;
            align-items: center;
            color: white;
            padding: 0.15rem 0.85rem;
            border-radius: 5px;

            span {
                margin-left: 0.35rem;
            }

            &.view {
                background-color: ${(props) => props.accent};
            }

            &.repo {
                background-color: slategray;
            }

            &:hover {
                filter: brightness(1.2);
            }
        }
    }

    .tags {
        display: flex;
        justify-content: center;
        margin: 1.5rem 0;

        span {
            padding: 0.25rem 0.5rem;
            color: ${(props) => props.accent};
            border: 2pt solid ${(props) => props.accent};
            border-radius: 5px;
            margin: 0 0.35rem;
        }
    }

    @media screen and (min-width: ${breakpoints.tablet}) {
        width: unset;
    }
`;

export default ProjectItemStyled;
