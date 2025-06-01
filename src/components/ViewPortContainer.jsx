import style from "@components/ViewportContainer.module.css";

function ViewportContainter({ children, variant, img = undefined, id = "" }) {
    const viewportContainer = img ? (
        <section
            style={{ backgroundImage: `url(${img})` }}
            className={style[variant]}
            id={id}
        >
            {" "}
            {children}{" "}
        </section>
    ) : (
        <section className={style[variant]} id={id}>
            {" "}
            {children}
        </section>
    );
    return viewportContainer;
}

export default ViewportContainter;
