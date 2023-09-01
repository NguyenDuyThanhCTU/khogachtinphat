import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Admin from "../components/Admin/Admin";
import EmptyLayout from "../Layout/EmptyLayout";
import Introduction from "../components/FrontEnd/Introduction/Introduction";
import Product from "../components/FrontEnd/Product/Product";
import Contact from "../components/FrontEnd/Contact/Contact";

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
];
