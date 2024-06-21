import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import allRoutes from "./routes";
import PrivateRoute from "./private-routes";
import AppLayout from "@/components/layout/app-layout";

interface IRoutes {
  id?: string;
  path?: string;
  component?: React.FC;
  meta?: {
    appLayout: boolean;
    privateRoute?: boolean;
  };
}

const MergedLayoutRoute = ({
  route,
  children,
}: {
  route?: IRoutes;
  children: React.ReactNode;
}) => {
  const PrivateRouteWrapper = route?.meta?.privateRoute
    ? PrivateRoute
    : Fragment;

  const AppLayoutWrapper = route?.meta?.appLayout ? AppLayout : Fragment;

  return (
    <PrivateRouteWrapper>
      <AppLayoutWrapper>{children}</AppLayoutWrapper>
    </PrivateRouteWrapper>
  );
};

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {allRoutes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={
              <MergedLayoutRoute route={route}>
                {<route.component />}
              </MergedLayoutRoute>
            }
          />
        ))}

        <Route
          path="*"
          element={
            <MergedLayoutRoute>
              <p>page not found</p>
            </MergedLayoutRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
