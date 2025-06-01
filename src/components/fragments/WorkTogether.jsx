import Button from "@components/Button.jsx";
import style from "@fragments/WorkTogether.module.css";

function WorkTogether() {
    return (
        <div className={style.normal}>
            <p className={style.title}>TRABAJEMOS JUNTOS</p>
            <Button text="Contáctanos" variant="normalWhite" />
            <div className={style.footer}>
                <p>Instragram</p>
                <p>Linkedin</p>
                <p>Behance</p>
                <p>Portafolio</p>
            </div>
        </div>
    );
}

export default WorkTogether;
