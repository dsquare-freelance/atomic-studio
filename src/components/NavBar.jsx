import NavItem from "@components/NavItem.jsx";
import style from "@components/NavBar.module.css";

function NavBar({ navItems }) {
    const navItemComponents = navItems.map((n) => (
        <NavItem key={n.id} navItem={n.navItem} href={n.href} />
    ));

    return <ul className={style.normal}>{navItemComponents}</ul>;
}

export default NavBar;
