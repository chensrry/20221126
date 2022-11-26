import * as services from "@/services/services";

export default {
  namespace: "services",
  state: {
    list: [],
  },
  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *init({ payload }, { put, call }) {
      const { data } = yield call(services.getServices);
      yield put({
        type: "update",
        payload: {
          list: data,
        },
      });
    },
  },
  subscriptions: {
    setUp({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === "/cons") {
          dispatch({
            type: "init",
          });
        }
      });
    },
  },
};
