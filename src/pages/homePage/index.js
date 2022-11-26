import React, { useEffect } from "react";

import Wrapper from "@/layout/Wrapper";

import { Button } from "antd";

import { useHistory, router, useDispatch } from "dva";

import style from "./index.less";

const { Link } = router;

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickToRoute = (path) => {
    console.log(path, "path");
    history.push(path);
  };

  // 需要请求结果返回并且useName存在才显示整个应用
  useEffect(() => {
    dispatch({
      type: "user/init",
    });
  }, []);

  return (
    <Wrapper>
      <div className={style.action_wrapper}>
        <div className={style.action_box}>
          <h2>库信云KBE</h2>
          <p>
            库珀区块链开放服务平台，提供开放、高效、灵活的区块链服务引擎，一站式构建区块链应用的BaaS平台
          </p>
          <div className={style.actions}>
            <Link to="/services">开始使用</Link>
            <Button
              onClick={() => {
                console.log(222222222);
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
