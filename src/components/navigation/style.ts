import styled from "styled-components";

export const NavigationStyle = styled.nav `
    ul {
        display: flex;
        border: 1px solid var(--border);
        border-radius: 0.4375rem;

        li {
            padding: 0.69rem 1.62rem;
            border-left: 1px solid var(--border);
            p {
                color: #5C5C5C;
                font-size: 0.875rem;
                font-weight: 400;
            }

            cursor: pointer;

            &:first-child {
                border-left: none;
            }

            &:hover {
                background-color: var(--grey-100);
                transition: all.5s;
                
                p {
                    color: #BFBFBF;
                }
            }
        }
    }
`;