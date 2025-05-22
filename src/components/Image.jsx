import style from "@components/Image.module.css";

function Image({ src, alt, variant }) {
  return (
    <div className={style[variant]}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default Image;
