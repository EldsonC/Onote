import styled from "styled-components";

export const HeaderStyle = styled.header `
    padding: 0rem 2.75rem;
    height: 5.625rem;
    width: calc(100vw - 5.5rem);

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background-color: var(--grey-200);

    .container_left {
        display: flex;
        align-items: center;
        gap: 2.55rem;
    }

    .container_right {
        display: flex;
        align-items: center;
        gap: 1.56rem;

        .profile {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            cursor: pointer;

            .profile_picture {
                width: 2.5rem;
                height: 2.5rem;

                background-color: var(--grey-0);

                border-radius: 50%;
            }
        }
        
    }

    @media screen and (max-width: 1318px) {
        .navigation {
            display: none;
        }
    }

    @media screen and (max-width: 710px) {
        .search {
            display: none;
        }
    }
`;