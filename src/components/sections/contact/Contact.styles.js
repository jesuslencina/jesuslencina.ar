import styled from "styled-components";
import { cardLike, expandOnHover } from "../../../utils/mixins";
import { paddings, breakpoints } from "../../../utils/variables";

const ContactStyled = styled.section`
    margin: 6vh ${paddings.mobilePaddingX} 2vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        a {
            padding: 0.5rem 1rem;
            display: block;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            ${cardLike}

            &.github {
                color: #4e5450;

                svg {
                    fill: #4e5450;
                }
            }

            &.linkedin {
                color: #0077b5;

                svg {
                    fill: #0077b5;
                }
            }
        }
    }

    @media screen and (min-width: ${breakpoints.laptop}) {
        .container {
            flex-direction: row;

            a {
                width: 25%;
                ${expandOnHover}
            }
        }
    }
`;

export default ContactStyled;
