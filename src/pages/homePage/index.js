import React from "react";

import Wrapper from "@/layout/Wrapper";

import { Button } from "antd";

import { useHistory } from "dva";

import style from "./index.less";

export default () => {
  const history = useHistory();
  const handleClickToRoute = (path) => {
    history.push(path);
  };

  return (
    <Wrapper>
      <div className={style.action_wrapper}>
        <div className={style.action_box}>
          <h2>库信云KBE</h2>
          <p>
            库珀区块链开放服务平台，提供开放、高效、灵活的区块链服务引擎，一站式构建区块链应用的BaaS平台
          </p>
          <div className={style.actions}>
            <Button
              onClick={() => {
                handleClickToRoute("/services");
              }}
              type="primary"
            >
              开始使用
            </Button>
            <Button
              onClick={() => {
                handleClickToRoute("/");
              }}
              style={{ marginLeft: "24px" }}
            >
              申请专业版
            </Button>
          </div>
        </div>
        <div className={style.img}>
          <img src="" alt="" />
        </div>
      </div>
    </Wrapper>
  );
};
