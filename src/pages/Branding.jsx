import Image from "@components/Image";
import style from "@pages/ServiceGrid.module.css";

import branding1 from "@assets/img/branding_1.png";
import branding2 from "@assets/img/branding_2.png";
import branding3 from "@assets/img/branding_3.png";
import branding4 from "@assets/img/branding_4.png";
import branding5 from "@assets/img/branding_5.png";
import branding6 from "@assets/img/branding_6.png";

function Branding() {
    return (
        <div className={style.normal}>
            <div>
                <h2>Branding</h2>
                <div className={style.grid}>
                    <Image src={branding1} alt="Branding  1" variant="innerPortafolio" />
                    <Image src={branding2} alt="Branding  1" variant="innerPortafolio" />
                    <Image src={branding3} alt="Branding  1" variant="innerPortafolio" />
                    <Image src={branding4} alt="Branding  1" variant="innerPortafolio" />
                    <Image src={branding5} alt="Branding  1" variant="innerPortafolio" />
                    <Image src={branding6} alt="Branding  1" variant="innerPortafolio" />
                </div>
            </div>
        </div>
    );
}

export default Branding;
