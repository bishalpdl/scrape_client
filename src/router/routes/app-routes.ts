import Dashboard from "@/page/dashboard";
import Product from "@/page/product/product";
import ProductDetail from "@/page/product/variant";
import VariantDetail from "@/page/product/variant-detail";
import React from "react";

interface IAppRoutes {
  id: string;
  path: string;
  component: React.FC;
  meta: {
    appLayout: boolean;
    privateRoute: boolean;
  };
}

const appRoutes: IAppRoutes[] = [
  {
    id: "dashboard",
    path: "/",
    component: Dashboard,
    meta: {
      appLayout: true,
      privateRoute: true,
    },
  },
  {
    id: "product",
    path: "/product",
    component: Product,
    meta: {
      appLayout: true,
      privateRoute: true,
    },
  },
  {
    id: "product-detail",
    path: "/product/:id",
    component: ProductDetail,
    meta: {
      appLayout: true,
      privateRoute: true,
    },
  },
  {
    id: "variant-detail",
    path: "/product/:id/variant/:variantId",
    component: VariantDetail,
    meta: {
      appLayout: true,
      privateRoute: true,
    },
  },
];
export default appRoutes;
