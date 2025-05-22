import style from "@components/BigNumberWithText.module.css";

function BigNumberWithText({ bigNumber, text, variant }) {
  return (
    <div className={style[variant]}>
      <p>{bigNumber}</p>
      <p>{text}</p>
    </div>
  );
}

export default BigNumberWithText;
