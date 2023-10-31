import styled from "styled-components";

export const InputsStyle = styled.div `
    &.input-search {
        padding: 0px 0.69rem;
        width: calc(25.25rem - 3rem);

        display: flex;
        justify-content: space-between;
        align-items: center;

        border: 1px solid var(--border);
        border-radius: 0.625rem;        
        background-color: var(--grey-200);

        input {
            height: 3rem;
            background-color: transparent;

            color: var(--grey-0);

            &::placeholder {
                color: #5C5C5C;
                font-size: 0.875rem;
                font-weight: 400;
            }
        }
    }
`;