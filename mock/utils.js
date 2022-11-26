export const makeResponse = (data) => {
  return {
    code: 200,
    success: true,
    message: "success",
    data,
  };
};

export const checkRole = async (req, res) => {
  if (!req.headers.role || req.headers.role !== "zhangsan") {
    res.send({
      code: 401,
      success: false,
      data: null,
      message: "need auth",
    });
  }
};
