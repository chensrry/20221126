import dva from "dva";
import createLoading from "dva-loading";
import { message } from "antd";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const app = dva({
  history,
  ...createLoading(),
  onError: (error) => {
    if (error.message) {
      message.error(error.message);
    }
  },
});

export default app;
