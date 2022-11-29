import * as services from "@/services/services";

import extendModel from "../utils/extendModel";
import base from "./base";

export default extendModel(base, {
  namespace: "blocks",
  state: {
    list: [],
  },
  effects: {
    *init({ payload }, { put, call }) {
      const { data } = yield call(services.getBlocks);
      yield put({
        type: "update",
        payload: {
          list: data,
        },
      });
    },
  },
});
