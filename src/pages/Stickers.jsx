import Image from "@components/Image";
import style from "@pages/ServiceGrid.module.css";

import stickers1 from "@assets/img/stickers_1.png";
import stickers2 from "@assets/img/stickers_2.png";
import stickers3 from "@assets/img/stickers_3.png";

function Stickers() {
    return (
        <div className={style.normal}>
            <div>
                <h2>Stickers</h2>
                <div className={style.grid}>
                    <Image src={stickers1} alt="stickers  1" variant="innerPortafolio" />
                    <Image src={stickers2} alt="stickers  1" variant="innerPortafolio" />
                    <Image src={stickers3} alt="stickers  1" variant="innerPortafolio" />
                </div>
            </div>
        </div>
    );
}

export default Stickers;
