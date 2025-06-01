import style from "@components/NavItem.module.css";
import { Link } from "@tanstack/react-router";

function NavItem({ navItem, href }) {
    return (
        <li className={style.normal}>
            <Link to={href}>
                <p>{navItem}</p>
            </Link>
        </li>
    );
}

export default NavItem;
