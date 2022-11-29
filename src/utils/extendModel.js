function extendModel(...models) {
  const base = { state: {}, subscriptions: {}, effects: {}, reducers: {} };
  models.reduce((pre, next) => {
    pre.namespace = next.namespace;
    if (typeof next.state === "object" && !Array.isArray(next.state)) {
      Object.assign(pre.state, next.state);
    } else if ("state" in next) {
      pre.state = next.state;
    }
    Object.assign(pre.subscriptions, next.subscriptions);
    Object.assign(pre.effects, next.effects);
    Object.assign(pre.reducers, next.reducers);
    return pre;
  }, base);
}

export default extendModel;
