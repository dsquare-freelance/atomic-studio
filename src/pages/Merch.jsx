import Image from "@components/Image";
import style from "@pages/ServiceGrid.module.css";

import merch1 from "@assets/img/merch_1.png";
import merch2 from "@assets/img/merch_2.png";
import merch3 from "@assets/img/merch_3.png";
import merch4 from "@assets/img/merch_4.png";
import merch5 from "@assets/img/merch_5.png";

function Merch() {
    return (
        <div className={style.normal}>
            <div>
                <h2>Merch</h2>
                <div className={style.grid}>
                    <Image src={merch1} alt="Merch  1" variant="innerPortafolio" />
                    <Image src={merch2} alt="Merch  1" variant="innerPortafolio" />
                    <Image src={merch3} alt="Merch  1" variant="innerPortafolio" />
                    <Image src={merch4} alt="Merch  1" variant="innerPortafolio" />
                    <Image src={merch5} alt="Merch  1" variant="innerPortafolio" />
                </div>
            </div>
        </div>
    );
}

export default Merch;
