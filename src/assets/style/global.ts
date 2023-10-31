import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;

        outline: none;
        border: none;
        
        list-style: none;
    }

    :root {
        --brand: #C7A2ED;

        --grey-0: #FFFFFF;
        --grey-100: #202020;
        --grey-200: #0B0C0E;

        --border: #363637;
    }

    body {
        background-color: var(--grey-200);
        font-family: "Inter", sans-serif;
    }
`;