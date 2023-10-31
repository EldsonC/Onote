import styled from "styled-components";

export const SubHeaderStyle = styled.header `
    width: 100%;
    padding-bottom: 2.13rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .container_right {
        display: flex;
        align-items: center;
        gap: 1.31rem;

        p {
            color: #525252;
            font-size: 1rem;
            font-weight: 500;
        }

        .version_tag {
            padding: 0.69rem 1.62rem;
            display: flex;
            gap: 0.62rem;

            border-radius: 2.125rem;
            border: 1px solid var(--border);
        }
    }

    @media screen and (max-width: 427px) {
        .container_right {
            .version_tag {
                display: none;
            }
        }
    }
`;