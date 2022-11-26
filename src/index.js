import React from "react";

import "./global.less";

import app from "./utils/app";

app.model(require("./models/user").default);

app.router(require("./router").default);

app.start("#root");
