import dva from "dva";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const app = dva({
  history,
});

export default app;
