import style from "@components/ViewportContainer.module.css";

function ViewportContainter({ children, variant, img = undefined }) {
  const viewportContainer = img ? (
    <section
      style={{ backgroundImage: `url(${img})` }}
      className={style[variant]}
    >
      {" "}
      {children}{" "}
    </section>
  ) : (
    <section className={style[variant]}> {children} </section>
  );
  return viewportContainer;
}

export default ViewportContainter;
