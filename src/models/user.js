import * as services from "@/services/user";

// 实现extend函数集成base模型的update方法

// const extend = () => {};

// const extendModel = extend(base, {
//   state: {},
//   effects: {},
// })

export default {
  namespace: "user",
  state: {},
  reducers: {
    update(state, { payload = {} }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
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
};
