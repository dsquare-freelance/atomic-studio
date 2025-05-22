import style from "@fragments/DescriptionFragment.module.css";

function DescriptionFragment({ colored, normal }) {
  return (
    <div className={style.normal}>
      <p>
        <span>{colored}</span>
        {normal}
      </p>
    </div>
  );
}

export default DescriptionFragment;
