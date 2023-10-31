import { SearchIcon } from "../../assets/icons/search";
import { SearchButton } from "../buttons/search";
import { InputsStyle } from "./style";

interface SearchProps {
    placeholder: string;
}
export function SearchInput({ placeholder }:SearchProps) {
    return (
        <InputsStyle className="input-search">
            <input type="text" placeholder={placeholder} />
            <SearchButton icon={<SearchIcon/>}/>
        </InputsStyle>
    );
}