import styled from "styled-components";

export const ButtonStyle = styled.button `

    &.search-button {
        width: 2rem;
        height: 2rem;
    
        display: flex;
        justify-content: center;
        align-items: center;
    
        background-color: var(--grey-100);
        border: 1px solid var(--border);
        border-radius: 0.625rem;
    
        cursor: pointer;
    }

    &.add-button {
        padding: 0.69rem 1.62rem;
        display: flex;
        align-items: center;
        gap: 0.62rem;

        background-color: var(--grey-200);
        border: 1px solid var(--border);
        border-radius: 0%.4375rem;

        p {
            color: #BFBFBF;
            font-size: 0.875rem;
            font-weight: 400;
        }

        cursor: pointer;
    }
`;