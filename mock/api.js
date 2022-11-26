import { makeResponse, checkRole } from "./utils";

export default {
  "/api/user/info": async function (req, res) {
    await checkRole(req, res);
    res.send(
      makeResponse({
        userName: "derrik",
      })
    );
  },
};
