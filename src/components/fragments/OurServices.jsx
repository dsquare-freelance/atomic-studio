import { useRef, useState, useEffect } from "react";
import Image from "@components/Image.jsx";
import Button from "@components/Button.jsx";
import style from "@fragments/OurServices.module.css";
import merch from "@assets/img/service_merch.png";
import redesSociales from "@assets/img/redes_sociales.png";
import branding from "@assets/img/service_branding.png";
import fotografia from "@assets/img/fotografia.png";
import stickers from "@assets/img/service_stickers.png";
import webDesign from "@assets/img/web_design.png";

function OurServices({ title }) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsIntersecting(true);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.95,
            },
        );

        const currrentElement = targetRef.current;

        if (currrentElement) {
            intersectionObserver.observe(currrentElement);
        }

        return () => {
            if (currrentElement) {
                intersectionObserver.unobserve(currrentElement);
            }
        };
    }, []);

    return (
        <>
            <div className={style.normal}>
                <div ref={targetRef} className={style.primaryContainer}>
                    <p>{title}</p>
                    <div className={style.servicesContainer}>
                        <div
                            className={`${style.webDesign}  ${isIntersecting ? style.serviceAnimation : ""}`}
                        >
                            <Image src={webDesign} variant="webDesign" />
                        </div>
                        <div
                            className={`${style.fotografia}  ${isIntersecting ? style.serviceAnimation : ""}`}
                        >
                            <Image src={fotografia} variant="fotografia" />
                        </div>
                        <div
                            className={`${style.stickers}  ${isIntersecting ? style.serviceAnimation : ""}`}
                        >
                            <Image src={stickers} variant="stickers" />
                        </div>
                        <div
                            className={`${style.redesSociales}  ${isIntersecting ? style.serviceAnimation : ""}`}
                        >
                            <Image src={redesSociales} variant="redesSociales" />
                        </div>
                        <div
                            className={`${style.merch}  ${isIntersecting ? style.serviceAnimation : ""}`}
                        >
                            <Image src={merch} variant="merch" />
                        </div>
                        <div
                            className={`${style.branding}  ${isIntersecting ? style.serviceAnimation : ""}`}
                        >
                            <Image src={branding} variant="branding" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurServices;
