import React from "react";

import style from "./index.less";
import { Button } from "antd";
import Wrapper from "@/layout/Wrapper";

export default () => {
  return (
    <Wrapper>
      <div className={style.services}>
        <h1>创建服务</h1>
        <div className={style.content}>
          <div className={style.content_item}>
            <h2>Fabric 体验版</h2>
            <p>
              面向开发者提供的区块链构建服务，适用于区块链应用前期开发与调试验证，可选择两种通用配置快速构建区块链网络
            </p>
            <ul>
              <li>免费体验区块链网络搭建服务</li>
              <li>快速构建区块链网络</li>
              <li>48小时试用，到期自动释放</li>
            </ul>
            <div className="mt-8">
              <Button type="primary">开始使用</Button>
            </div>
          </div>
          <div className={style.content_item}>
            <h2>Fabric 专业版</h2>
            <p>
              面向企业级用户提供的一站式区块链构建服务，是兼具高性能、可扩展的企业级区块链网络服务，支持用户按需设置网络配置，付费使用
            </p>
            <ul>
              <li>自动化部署企业级区块链网络</li>
              <li>可视化控制台，动态管理网络及成员配置</li>
              <li>付费使用，长期有效</li>
            </ul>
            <div className="mt-8">
              <Button type="primary">开始使用</Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
