import React from "react";
import { ButtonStyle } from "./style";

interface ButtonProps {
    icon: React.ReactNode;
}

export function SearchButton({ icon }:ButtonProps) {
    return (
        <ButtonStyle className="search-button">
            {icon}
        </ButtonStyle>
    );
}