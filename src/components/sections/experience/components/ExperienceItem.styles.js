import styled from "styled-components";
import { cardLike } from "../../../../utils/mixins";
import { breakpoints } from "../../../../utils/variables";

const ExperienceItemStyled = styled.article`
    ${cardLike}
    display: grid;
    text-align: center;
    align-items: center;
    padding: 1rem;
    margin: 0;

    .icon svg {
        width: 100%;
        height: 100%;
        padding-right: 1rem;
        fill: ${(props) => props.bg};
    }

    p {
        font-size: 1rem;
        white-space: nowrap;
    }

    h3 {
        color: ${(props) => props.bg};
        font-size: 1.5rem;
        margin: 0.5rem 0;
    }

    strong {
        font-size: 1.15rem;
    }

    @media screen and (min-width: ${breakpoints.tablet}) {
        grid-template-columns: 30% 70%;
        text-align: left;
        margin: 1.25rem 0;

        p {
            font-size: 1rem;
        }

        h3 {
            font-size: 1.75rem;
        }

        strong {
            font-size: 1.25rem;
        }
    }
`;

export default ExperienceItemStyled;
