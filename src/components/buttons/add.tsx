import { ButtonStyle } from "./style";

interface ButtonProps {
    title: string;
    icon: React.ReactNode;
    add: () => void;
}
export function AddButton({ title, icon, add }:ButtonProps) {
    return (
        <ButtonStyle onClick={add} className="add-button">
            {icon}
            <p>{title}</p>
        </ButtonStyle>
    );
}