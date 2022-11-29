import React from "react";

import { router } from "dva";

import Layout from "./layout/index";

import loadable from "./utils/loadable";

const { Router, Route, Switch, Redirect } = router;

const routers = [
  {
    path: "/",
    component: () => import("./pages/homePage"),
  },
  {
    path: "/con-center",
    component: () => import("./pages/conCenter"),
  },
  {
    path: "/services",
    component: () => import("./pages/services"),
  },
  {
    path: "/cons",
    component: () => import("./pages/cons"),
    models: () => [import("./models/services")],
  },
  {
    path: "/blocks",
    component: () => import("./pages/blocks"),
    models: () => [import("./models/blocks")],
  },
];

export default ({ app, history }) => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          {routers.map(({ path, component, models }) => {
            return (
              <Route
                key={path}
                path={path}
                component={loadable({
                  app,
                  component,
                  models,
                })}
                exact
              />
            );
          })}
          <Route
            path="*"
            component={() => {
              <Redirect to="/" />;
            }}
          />
        </Switch>
      </Layout>
    </Router>
  );
};
