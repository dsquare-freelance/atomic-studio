import style from "@components/Button.module.css";

function Button({ text, variant }) {
    return (
        <button className={style[variant]} type="button">
            {text}
        </button>
    );
}

export default Button;
