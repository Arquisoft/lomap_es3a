import "../../css/navigation.css";
import {NavItemType} from "../../shared/shareddtypes";
import {NavLink} from "react-router-dom";

function NavItem({to, text}: NavItemType) {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={to}>{text}</NavLink>
        </li>
    )
}

export default NavItem