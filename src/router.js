import React from "react";

import { router } from "dva";

import HomePage from "./pages/homePage";

import ConCenter from "./pages/conCenter";
import Layout from "./layout/index";

import Services from "./pages/services";

const { BrowserRouter, Route, Switch } = router;

export default ({ app, history }) => {
  return (
    <BrowserRouter history={history}>
      <Layout>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/con-center" component={ConCenter} exact />
          <Route path="/services" component={Services} exact />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
