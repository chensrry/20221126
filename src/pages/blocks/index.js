import React from "react";

import style from "./index.less";

import Wrapper from "@/layout/Wrapper";

import { Table } from "antd";

import { useDispatch, useSelector } from "dva";

export default () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.blocks);
  const columns = [
    {
      title: "区块高度",
      dataIndex: "blockHeight",
    },
    {
      title: "交易数",
      dataIndex: "tradeNum",
    },
    {
      title: "区块哈希",
      dataIndex: "blockHash",
    },
    {
      title: "时间",
      dataIndex: "time",
    },
    {
      title: "操作",
      render: () => {
        return <a>详情</a>;
      },
    },
  ];
  React.useEffect(() => {
    dispatch({
      type: "blocks/init",
    });
  }, []);

  return (
    <Wrapper>
      <Table rowKey="id" columns={columns} dataSource={list} />
    </Wrapper>
  );
};
