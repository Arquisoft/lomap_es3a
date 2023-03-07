import {NavItemType} from "../../shared/shareddtypes";

function NavItem({href, text}: NavItemType) {
    return (
        <div className="nav-item">
            <a className="nav-link" href={href}>{text}</a>
        </div>
    )
}

export default NavItem