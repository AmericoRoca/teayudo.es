
import { StaticWebsites } from "../Components/PagesProjects/StaticWebsites";
import { TresDWeb } from "../Components/PagesProjects/TresDWeb";
import { CustomWebApp } from "../Components/PagesProjects/CustomWebApp";
import { ECommerce } from "../Components/PagesProjects/ECommerce";

export const projectRoutes = [
  {
    path: "/static-websites",
    component: StaticWebsites,
    key: "static", // clave para identificar
  },
  {
    path: "/ecommerce",
    component: ECommerce,
    key: "ecommerce",
  },
  {
    path: "/3dwebsite",
    component: TresDWeb,
    key: "ecommerce",
  },
  {
    path: "/custom-app",
    component: CustomWebApp,
    key: "ecommerce",
  },
];
