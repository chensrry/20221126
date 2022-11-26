import * as services from "@/services/user";

export default {
  namespace: "user",
  state: {
    name: "张三",
  },
  reducers: {
    update(state, { payload = {} }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *init({ payload }, { call }) {
      const data = yield call(services.getUserInfo);
    },
  },
};
