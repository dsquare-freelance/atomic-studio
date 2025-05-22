import ViewportContainter from "@components/ViewportContainer.jsx";
import TopBar from "@components/TopBar.jsx";
import HeroContainer from "@components/HeroContainer.jsx";
import DescriptionFragment from "@fragments/DescriptionFragment.jsx";
import RecentWork from "@fragments/RecentWork.jsx";
import OurVision from "@components/fragments/OurVision.jsx";
import OurServices from "@components/fragments/OurServices.jsx";

import logo from "@assets/img/small_logo_white.png";
import heroImage from "@assets/img/big_logo_white.png";
import test from "@assets/img/test.png";

const mockNavItems = [
  {
    id: 1,
    navItem: "Portafolio",
  },
  {
    id: 2,
    navItem: "About Us",
  },
  {
    id: 3,
    navItem: "Servicios",
  },
];

const bigNumberWithTextItems = [
  { bigNumber: "4", text: "Años de experiencia" },
  { bigNumber: "+121", text: "Proyectos completados" },
  { bigNumber: "2", text: "Fundadoras de Atomic Studio" },
];

function Landing() {
  return (
    <>
      <TopBar
        img={{ src: logo, alt: "Atomic Studio Logo", variant: "logo" }}
        navItems={mockNavItems}
        button={{ text: "Contáctanos", variant: "normalWhite" }}
      />
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
      <ViewportContainter variant="image" img={test}>
        <RecentWork
          text="Trabajos recientes"
          button={{ text: "Ver mas", variant: "outlinePrimary" }}
        />
      </ViewportContainter>
      <OurVision
        title="Nuestra vision"
        description="Creamos identidades de marca que conectan, uniendo estrategia, identidad y producción para potenciar el valor real de cada marca."
        bigNumberWithTextItems={bigNumberWithTextItems}
      />
      <ViewportContainter variant="white">
        <OurServices title="Nuestros servicios" />
      </ViewportContainter>
    </>
  );
}

export default Landing;
