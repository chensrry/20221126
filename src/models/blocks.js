import * as services from "@/services/services";

export default {
  namespace: "blocks",
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
      const { data } = yield call(services.getBlocks);
      yield put({
        type: "update",
        payload: {
          list: data,
        },
      });
    },
  },
};
