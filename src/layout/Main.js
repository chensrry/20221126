import React from "react";

import style from "./main.less";

export default ({ children }) => {
  return <main className={style.main}>{children}</main>;
};
