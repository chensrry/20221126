import React from "react";

import style from "./index.less";

import { useDispatch, useSelector } from "dva";

import Wrapper from "@/layout/Wrapper";

// 两个有啥不同
// context.Consumer 实现取数据

// useContext(Context)
// <context.Consumer>

const useCus1 = (value) => {
  const cacheRef = React.useRef(value);
  cacheRef.current = value;
  return cacheRef.current;
};

const useCus2 = (value) => {
  const cacheRef = React.useRef(value);
  React.useEffect(() => {
    cacheRef.current = value;
  }, [value]);
  return cacheRef.current;
};

export default () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.services);

  // React.useEffect(() => {
  //   dispatch({
  //     type: "services/init",
  //   });
  // }, []);

  return (
    <Wrapper>
      <div className={style.cons}>
        <h1>我的服务</h1>
        <div className={style.list}>
          {list?.map(({ serviceName, createDate, type, releaseTime, desc }) => {
            return (
              <div className={style.item}>
                <h3>{serviceName}</h3>
                <p>{createDate}</p>
                <p>{type}</p>
                <p>{releaseTime}</p>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
