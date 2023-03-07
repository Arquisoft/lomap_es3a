import "../../css/navigation.css";
import {NavItemType} from "../../shared/shareddtypes";
import {NavLink} from "react-router-dom";

function NavItem({to, text}: NavItemType) {
    return (
        <NavLink to={to}>{text}</NavLink>
    )
}

export default NavItem