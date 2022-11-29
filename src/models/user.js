import * as services from "@/services/user";

// 实现extend函数集成base模型的update方法

// const extend = () => {};

// const extendModel = extend(base, {
//   state: {},
//   effects: {},
// })

import extendModel from "../utils/extendModel";
import base from "./base";

export default extendModel(base, {
  namespace: "user",
  state: {},
  effects: {
    *init({ payload }, { call, put }) {
      const { data } = yield call(services.getUserInfo);
      yield put({
        type: "update",
        payload: {
          ...data,
        },
      });
    },
  },
});
