import { makeResponse, checkRole } from "./utils";

export default {
  "/api/blocks": async function (req, res) {
    await checkRole(req, res);
    res.send(
      makeResponse([
        {
          blockHeight: "500",
          tradeNum: "20",
          blockHash: "xxxxxxxxxx",
          time: "2020/04/26 20:00:00 ",
          id: 1,
        },
        {
          blockHeight: "500",
          tradeNum: "20",
          blockHash: "xxxxxxxxxx",
          time: "2020/04/26 20:00:00 ",
          id: 2,
        },
        {
          blockHeight: "500",
          tradeNum: "20",
          blockHash: "xxxxxxxxxx",
          time: "2020/04/26 20:00:00 ",
          id: 3,
        },
        {
          blockHeight: "500",
          tradeNum: "20",
          blockHash: "xxxxxxxxxx",
          time: "2020/04/26 20:00:00 ",
          id: 4,
        },
      ])
    );
  },
};
