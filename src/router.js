import React from "react";

import { router } from "dva";

import Layout from "./layout/index";

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
  },
  {
    path: "/blocks",
    component: () => import("./pages/blocks"),
  },
];

const asyncLoader = (loader) => {
  return class extends React.Component {
    state = {
      Comps: null,
    };
    componentDidMount() {
      loader().then(({ default: Comps }) => {
        this.setState({
          Comps,
        });
      });
    }
    render() {
      const { Comps } = this.state;
      if (Comps) {
        return <Comps {...this.props} />;
      } else {
        return null;
      }
    }
  };
};

export default ({ app, history }) => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          {routers.map(({ path, component }) => {
            return (
              <Route path={path} component={asyncLoader(component)} exact />
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
