import React from "react";

import style from "./header.less";

export default () => {
  return (
    <header className={style.header}>
      <div className={style.header_contonten}>
        <div className={style.header_memu}>
          <a className="active">首页</a>
          <a>产品</a>
          <a>合约中心</a>
        </div>
        <div className={style.header_action}></div>
      </div>
    </header>
  );
};
