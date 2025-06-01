import { Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Button from "@components/Button.jsx";
import Image from "@components/Image.jsx";

import branding from "@assets/img/branding.png";
import stickers from "@assets/img/stickers.png";
import packaging from "@assets/img/packaging.png";
import merch from "@assets/img/merch.png";

import style from "@fragments/Portafolio.module.css";

const portafolioGridItems = [
    {
        src: branding,
        alt: "Branding",
        variant: "portafolio",
        label: "Branding",
        route: "/branding",
    },
    {
        src: stickers,
        alt: "Sticker",
        variant: "portafolio",
        label: "Stickers",
        route: "/stickers",
    },
    {
        src: packaging,
        alt: "Packaging",
        variant: "portafolio",
        label: "Packaging",
        route: "/packaging",
    },
    {
        src: merch,
        alt: "Merch",
        variant: "portafolio",
        label: "Merch",
        route: "/merch",
    },
];

function ImageWithLabel({ img, label }) {
    return (
        <div className={style.imageLabel}>
            <Image src={img.src} alt={img.alt} variant={img.variant}></Image>
            <p className={style.label}>{label}</p>
        </div>
    );
}

function Portafolio() {
    const portafolioGridComponents = portafolioGridItems.map((p) => (
        <Link to={p.route}>
            <ImageWithLabel
                img={{ src: p.src, alt: p.alt, variant: p.variant }}
                label={p.label}
            />
        </Link>
    ));
    return (
        <div className={style.normal}>
            <Button text="Portafolio" variant="normalPrimary" />
            <div className={style.imageGrid}>{portafolioGridComponents}</div>
        </div>
    );
}

export default Portafolio;
