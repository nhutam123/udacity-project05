import React, { Fragment } from "react";
import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { RouterType } from "./shares/types";
import { publicRoutes, privateRoutes } from "./routes";

function App() {
  const [cookie] = useCookies(["sessionId"]);
  const location = useLocation();
  let routers: RouterType[] = [];

  const publicPaths: string[] = [];

  for (let i = 0; i < publicRoutes.length; i++) {
    publicPaths.push(publicRoutes[i].path);
  }

  if (!cookie.sessionId) {
    if (publicPaths.includes(location.pathname)) {
      routers = publicRoutes;
    } else {
      return <Navigate to="/login" />;
    }
  } else {
    routers = [...privateRoutes, ...publicRoutes];
  }
  return (
    <Routes>
      {routers.map((route: RouterType, index: number) => {
        const { path, component, layout } = route;
        const Page = component;
        const Layout = layout || Fragment;
        return (
          <Route
            path={path}
            key={index}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
