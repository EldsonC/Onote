import { LogoIcon } from "../../assets/icons/logo";
import { MenuIcon } from "../../assets/icons/menu";
import { SearchInput } from "../inputs/search";
import { Navigation } from "../navigation";
import { HeaderStyle } from "./style";

export function Header() {
    return (
        <HeaderStyle>
            <div className="container_left">
                <LogoIcon/>
                <div className="search">
                    <SearchInput placeholder="Search one note..."/>
                </div>
            </div>
            <div className="container_right">
                <div className="navigation">
                    <Navigation/>
                </div>
                <div className="profile">
                    <MenuIcon/>
                    <div className="profile_picture">
                        
                    </div>
                </div>
            </div>
        </HeaderStyle>
    );
}