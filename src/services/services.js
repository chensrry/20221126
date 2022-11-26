import request from "@/utils/request";

export async function getServices() {
  return request("/api/services", {
    method: "GET",
  });
}

export async function getBlocks() {
  return request("/api/blocks", {
    method: "GET",
  });
}
