import style from "@components/HeroContainer.module.css";
import Image from "@components/Image.jsx";
import Button from "@components/Button.jsx";

function HeroContainer({ img, button }) {
  return (
    <div className={style.normal}>
      <Image src={img.src} alt={img.alt} variant={img.variant} />
      <Button text={button.text} variant={button.variant} />
    </div>
  );
}

export default HeroContainer;
