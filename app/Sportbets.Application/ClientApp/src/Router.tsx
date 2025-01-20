import {
  createBrowserRouter,
  RouterProviderProps,
  RouterProvider,
} from "react-router";
import { configRoutes } from "@sportbets/routes";

const browserRouter = createBrowserRouter(configRoutes);
const Router = (props: Partial<RouterProviderProps>) => (
  <RouterProvider router={browserRouter} {...props} />
);

export default Router;
