import { css } from "styled-components";

export const boxShadow = css`
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.2);
`;

export const cardLike = css`
    background-color: white;
    border-radius: 4px;
    ${boxShadow}
`;

export const expandOnHover = css`
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;
