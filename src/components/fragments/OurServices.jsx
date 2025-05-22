import style from "@fragments/OurServices.module.css";

function OurServices({ title }) {
  return (
    <>
      <div className={style.normal}>
        <div>
          <p>{title}</p>
        </div>
      </div>
    </>
  );
}

export default OurServices;
