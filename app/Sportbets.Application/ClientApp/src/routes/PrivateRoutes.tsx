import { RouteObject } from "react-router";
import { ROOT_BASE_URL } from "./ConstantRoutes";
import { MainLayout } from "@sportbets/components/layouts/Layout/MainLayout";
import { Home } from "@sportbets/pages/home/Home";
import { NotFound } from "@sportbets/pages/not-found/Notfound";

export const PrivateRoutes: RouteObject[] = [
  {
    path: ROOT_BASE_URL,
    element: <MainLayout />,
    children: [
      {
        path: ROOT_BASE_URL,
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
