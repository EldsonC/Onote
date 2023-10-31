import { NavigationStyle } from "./style";

export function Navigation() {
    return (
        <NavigationStyle>
            <ul>
                <li>
                    <p>Past hour</p>
                </li>
                <li>
                    <p>Past 6 hours</p>
                </li>
                <li>
                    <p>Today</p>
                </li>
                <li>
                    <p>Yesterday</p>
                </li>
                <li>
                    <p>This week</p>
                </li>
            </ul>
        </NavigationStyle>
    );
}