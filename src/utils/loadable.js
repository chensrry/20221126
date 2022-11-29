import React from "react";

const cached = {};
function registerModel(app, model) {
  model = model.default || model;
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

const asyncLoader = ({ loader }) => {
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

const loadable = (config) => {
  const { app, models: resolveModels, component: resolveComponent } = config;
  return asyncLoader({
    loader: () => {
      const models = typeof resolveModels === "function" ? resolveModels() : [];
      const component = resolveComponent();
      return new Promise((resolve) => {
        Promise.all([component, ...models]).then((res) => {
          const [resComponent, ...resModels] = res;
          if (models && models.length) {
            resModels.forEach((m) => {
              m = m.default || m;
              if (!Array.isArray(m)) {
                m = [m];
              }
              m.map((_) => {
                registerModel(app, _);
              });
            });
          }
          resolve(resComponent);
        });
      });
    },
  });
};

export default loadable;
