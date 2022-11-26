import React from "react";

import style from "./wrapper.less";

export default ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};
