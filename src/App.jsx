import ReactDOM from "react-dom/client";
import {
    Outlet,
    RouterProvider,
    Link,
    createRouter,
    createRoute,
    createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import TopBar from "@components/TopBar.jsx";
import logo from "@assets/img/small_logo_white.png";

import Landing from "@pages/Landing.jsx";
import Branding from "@pages/Branding";
import Merch from "@pages/Merch";
import Packaging from "@pages/Packaging";
import Stickers from "./pages/Stickers";

const mockNavItems = [
    {
        id: 1,
        navItem: "Portafolio",
        href: "/#portafolio",
    },
    {
        id: 2,
        navItem: "About Us",
        href: "/#aboutus",
    },
    {
        id: 3,
        navItem: "Servicios",
        href: "/#services",
    },
];

const rootRoute = createRootRoute({
    component: () => (
        <>
            <TopBar
                img={{ src: logo, alt: "Atomic Studio Logo", variant: "logo" }}
                navItems={mockNavItems}
                button={{ text: "Contáctanos", variant: "normalWhite" }}
            />
            <br />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Landing,
});

const stickersRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/stickers",
    component: Stickers,
});

const brandingRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/branding",
    component: Branding,
});

const merchRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/merch",
    component: Merch,
});

const packagingRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/packaging",
    component: Packaging,
});

const routeTree = rootRoute.addChildren([
    indexRoute,
    brandingRoute,
    merchRoute,
    stickersRoute,
    packagingRoute,
]);

const router = createRouter({ routeTree });

function App() {
    return <RouterProvider router={router} />;
}

export default App;
