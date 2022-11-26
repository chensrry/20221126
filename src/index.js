import React from "react";

import "./global.less";
import "antd/dist/antd.css";
import "antd/dist/antd.min.css";

import app from "./utils/app";

app.model(require("./models/user").default);
app.model(require("./models/services").default);
app.model(require("./models/blocks").default);

app.router(require("./router").default);

app.start("#root");
