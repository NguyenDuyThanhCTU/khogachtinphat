import Login from "../components/Login/Login";
import Admin from "../components/Admin/Admin";
import EmptyLayout from "../Layout/EmptyLayout";

import Home from "../components/Client/Home/Home";
import Contact from "../components/Client/Contact/Contact";
import Product from "../components/Client/Product/Product";
import Introduction from "../components/Client/Introduction/Introduction";
import ProductDetail from "../components/Client/Product/ProductDetail";

export const AllRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
    Layout: EmptyLayout,
  },
  {
    path: "/admin",
    component: Admin,
    Layout: EmptyLayout,
  },
  {
    path: "/gioi-thieu",
    component: Introduction,
  },
  {
    path: "/san-pham",
    component: Product,
  },
  {
    path: "/lien-he",
    component: Contact,
  },
  {
    path: "/san-pham/:id",
    component: ProductDetail,
  },
];
