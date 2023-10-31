import { EditIcon } from "../../assets/icons/edit";
import { CardStyle } from "./style";

interface CardProps {
    title: string;
    text: string;
    date: string;
    onEdit: () => void;
}
export function Card({ title, text, date, onEdit }:CardProps) {
    return (
        <CardStyle>
            <header>
                <h3>{title}</h3>
                <div className="left_data">
                    <div onClick={onEdit} style={{cursor:"pointer"}}>
                        <EditIcon/>
                    </div>
                    <span>{date}</span>
                    <div className="chart"></div>
                </div>
            </header>
            <div className="container_tasks">
                <pre>{text}</pre>
            </div>
        </CardStyle>
    );
}