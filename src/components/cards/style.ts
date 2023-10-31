import styled from "styled-components";

export const CardStyle = styled.div `
    padding: 1.06rem 1.31rem;
    width: calc(28.4375rem - 2.62rem);
    max-width: calc(100% - 2.62rem);
    max-height: 232.91px;

    display: flex;
    flex-direction: column;

    background-color: var(--grey-100);
    border: 1px solid var(--border);
    border-radius: 0.80rem;

    header {
        display: flex;
        justify-content: space-between;

        h3 {
            color: var(--grey-0);
            font-size: 1.30rem;
            font-weight: 500;
        }

        .left_data {
            display: flex;
            align-items: center;
            gap: 1rem;

            span {
                color: #6E6E6E;
            }

            .chart {
                width: 1.50rem;
                height: 1.50rem;

                border-radius: 50%;
                background-color: var(--brand);
            }
        }
    }

    .container_tasks {
        margin-top: 0.75rem;

        pre {
            max-width: 100%;
            white-space: pre-wrap;
            overflow: hidden;
            color: #969696;
        }
    }

    &.card-edit {
        input {
            background-color: transparent;
            color: var(--grey-0);
            font-size: 20px;
            font-weight: 500;
            font-family: "Inter", sans-serif;
        }

        textarea {
            min-height: 40px;
            max-width: 100%;
            padding-top: 12px;
            background-color: transparent;
            color: #969696;
        }

        button {
            margin-top: 15px;
            padding: 0.63rem 1.63rem;
            max-width: 100px;
            border-radius: 0.40rem;
            background-color: var(--brand);
            cursor: pointer;
        }
    }

    @media screen and (max-width: 775px) {
        width: 100%;
        header {
            .left_data {
                margin-bottom: 15px;
                width: 100%;

                display: flex;
                flex-direction: row-reverse;
                justify-content: flex-end;
                
            }
            flex-direction: column-reverse;
        }
    }
`;