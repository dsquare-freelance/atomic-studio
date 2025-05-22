import Image from "@components/Image.jsx";
import Button from "@components/Button.jsx";
import style from "@fragments/RecentWork.module.css";

function RecentWork({ text, button }) {
  return (
    <>
      <div className={style.normal}>
        <p>{text}</p>
        <Button text={button.text} variant={button.variant} />
      </div>
    </>
  );
}

export default RecentWork;
