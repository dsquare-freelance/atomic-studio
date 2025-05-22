import style from "@components/NavItem.module.css";

function NavItem({ navItem }) {
  return (
    <li className={style.normal}>
      <a>{navItem}</a>
    </li>
  );
}

export default NavItem;
