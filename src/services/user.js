import request from "@/utils/request";

export async function getUserInfo() {
  return request("/api/user/info");
}
