import BigNumberWithText from "@components/BigNumberWithText.jsx";
import style from "@fragments/OurVision.module.css";

function OurVision({ title, description, bigNumberWithTextItems }) {
  const bigNumberWithTextComponents = bigNumberWithTextItems.map((n) => (
    <BigNumberWithText
      bigNumber={n.bigNumber}
      text={n.text}
      variant="primary"
    />
  ));
  return (
    <>
      <div className={style.normal}>
        <p>{title}</p>
        <p>{description}</p>
        <div>{bigNumberWithTextComponents}</div>
      </div>
    </>
  );
}

export default OurVision;
