import NavBar from "@components/NavBar.jsx";
import Button from "@components/Button.jsx";
import Image from "@components/Image.jsx";
import style from "@components/TopBar.module.css";

function TopBar({ img, navItems, button }) {
  return (
    <section className={style.normal}>
      <Image src={img.src} alt={img.alt} variant={img.variant} />
      <NavBar navItems={navItems} />
      <Button text={button.text} variant={button.variant} />
    </section>
  );
}

export default TopBar;
