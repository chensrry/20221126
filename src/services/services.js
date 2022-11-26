import request from "@/utils/request";

export async function getServices(params) {
  return request("/xxxxx", {
    method: "GET",
    params,
  });
}
