import { makeResponse, checkRole } from "./utils";

export default {
  "/api/services": async function (req, res) {
    await checkRole(req, res);
    res.send(
      makeResponse([
        {
          serviceName: "区块链技术赋能智慧城市",
          createDate: "2020/04/27 17:00:00",
          type: "体验版本",
          releaseTime: "2",
          desc: "xxxxxxxxxxxx",
        },
        {
          serviceName: "区块链技术赋能智慧城市",
          createDate: "2020/04/27 17:00:00",
          type: "体验版本",
          releaseTime: "2",
          desc: "xxxxxxxxxxxx",
        },
        {
          serviceName: "区块链技术赋能智慧城市",
          createDate: "2020/04/27 17:00:00",
          type: "体验版本",
          releaseTime: "2",
          desc: "xxxxxxxxxxxx",
        },
      ])
    );
  },
};
