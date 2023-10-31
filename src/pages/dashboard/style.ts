import styled from "styled-components";

export const DashStyle = styled.main `
    padding: 3.75rem;
    margin-right: 2.75rem;
    width: calc(100vw - 7.6rem);
    height: calc(100vh - 13.3rem);

    border-top: 1px solid var(--border);
    border-right: 1px solid var(--border);
    border-radius: 0rem 1.875rem;

    .container_list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 460px));
        grid-template-rows: repeat(auto-fill, minmax(0px, 1fr));
        grid-gap: 10px;
        justify-content: flex-start;
        align-items: flex-start;
    }

    @media screen and (max-width: 775px) {
        padding: 1rem;
        width: calc(100% - 3rem);

        .container_list {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;