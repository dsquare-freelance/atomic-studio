import Image from "@components/Image";
import style from "@pages/ServiceGrid.module.css";

import packaging1 from "@assets/img/packaging_1.png";
import packaging2 from "@assets/img/packaging_2.png";
import packaging3 from "@assets/img/packaging_3.png";
import packaging4 from "@assets/img/packaging_4.png";
import packaging5 from "@assets/img/packaging_5.png";
import packaging6 from "@assets/img/packaging_6.png";

function Packaging() {
    return (
        <div className={style.normal}>
            <div>
                <h2>Packaging</h2>
                <div className={style.grid}>
                    <Image
                        src={packaging1}
                        alt="packaging  1"
                        variant="innerPortafolio"
                    />
                    <Image
                        src={packaging2}
                        alt="packaging  1"
                        variant="innerPortafolio"
                    />
                    <Image
                        src={packaging3}
                        alt="packaging  1"
                        variant="innerPortafolio"
                    />
                    <Image
                        src={packaging4}
                        alt="packaging  1"
                        variant="innerPortafolio"
                    />
                    <Image
                        src={packaging5}
                        alt="packaging  1"
                        variant="innerPortafolio"
                    />
                    <Image
                        src={packaging6}
                        alt="packaging  1"
                        variant="innerPortafolio"
                    />
                </div>
            </div>
        </div>
    );
}

export default Packaging;
