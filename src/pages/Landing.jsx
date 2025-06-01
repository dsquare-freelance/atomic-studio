import ViewportContainter from "@components/ViewportContainer.jsx";
import HeroContainer from "@components/HeroContainer.jsx";
import DescriptionFragment from "@fragments/DescriptionFragment.jsx";
import RecentWork from "@fragments/RecentWork.jsx";
import OurVision from "@components/fragments/OurVision.jsx";
import OurServices from "@components/fragments/OurServices.jsx";
import Portafolio from "@fragments/Portafolio.jsx";
import WorkTogether from "@components/fragments/WorkTogether";

import heroImage from "@assets/img/big_logo_white.png";
import test from "@assets/img/test.png";

const bigNumberWithTextItems = [
    { bigNumber: "4", text: "Años de experiencia" },
    { bigNumber: "+121", text: "Proyectos completados" },
    { bigNumber: "2", text: "Fundadoras de Atomic Studio" },
];

function Landing() {
    return (
        <>
            <ViewportContainter variant="primary">
                <HeroContainer
                    img={{
                        src: heroImage,
                        alt: "Atomic Studio Hero Image",
                        variant: "bigLogo",
                    }}
                    button={{ text: "Trabajemos juntos", variant: "outlineWhite" }}
                />
            </ViewportContainter>
            <DescriptionFragment
                colored="Atomic Studio"
                normal=" es una agencia creativa boutique que convierte ideas en marcas inolvidables. Desde el concepto hasta el producto físico, diseñamos experiencias visuales con propósito, impacto y resultados reales."
            />
            <ViewportContainter variant="image" img={test} id="aboutus">
                <RecentWork
                    text="Trabajos recientes"
                    button={{ text: "Ver más", variant: "outlinePrimary" }}
                />
            </ViewportContainter>
            <OurVision
                title="Nuestra vision"
                description="Creamos identidades de marca que conectan, uniendo estrategia, identidad y producción para potenciar el valor real de cada marca."
                bigNumberWithTextItems={bigNumberWithTextItems}
            />
            <ViewportContainter variant="white" id="services">
                <OurServices title="Nuestros servicios" />
            </ViewportContainter>
            <ViewportContainter variant="white" id="portafolio">
                <Portafolio />
            </ViewportContainter>
            <WorkTogether />
        </>
    );
}

export default Landing;
