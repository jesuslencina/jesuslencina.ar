import styled from "styled-components";
import { paddings, breakpoints } from "../../../utils/variables";

const AboutStyled = styled.section`
    display: flex;
    flex-direction: column;
    padding: ${paddings.mobilePaddingX};

    .profile-picture {
        background-color: ${(props) => props.theme.color};
        border-radius: 99%;
        transform: translateX(-14px);
    }

    h2 {
        margin: 0.75rem 0;
    }

    @media screen and (min-width: ${breakpoints.laptop}) {
        padding: ${paddings.desktopPaddingX};
    }
`;

export default AboutStyled;
