import * as services from "@/services/services";

import extendModel from "../utils/extendModel";
import base from "./base";

export default extendModel(base, {
  namespace: "services",
  state: {
    list: [],
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
});
