import { AddIcon } from "../../assets/icons/add";
import { VersionIcon } from "../../assets/icons/version";
import { AddButton } from "../buttons/add";
import { SubHeaderStyle } from "./style";

interface SubHeaderProps {
    addCard: () => void;
}
export function SubHeader({ addCard }: SubHeaderProps) {
    return (
        <SubHeaderStyle>
            <AddButton title="New note" icon={<AddIcon/>} add={addCard}/>
            <div className="container_right">
                <p></p>
                <div className="version_tag">
                    <VersionIcon/>
                    <p>Beta version dev</p>
                </div>
            </div>
        </SubHeaderStyle>
    );
}