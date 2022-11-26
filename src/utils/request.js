import axios from "axios";

// 请求拦截 header如果没有张三,加上张三

// response拦截 reponse.status 200 300;

// headers['role']: 张三

const requestIntercep = (config) => {
  if (!config.headers["role"]) {
    config.headers["role"] = "zhangsan";
  }
  return config;
};

const checkResponseStatus = (response) => {
  if (response.status >= 200 || response.status <= 300) {
    return response.data;
  }
  const error = {
    message: response.statusText,
    response,
  };
  throw error;
};

const checkResponseCode = (response) => {
  if (response.code === 200) {
    return response;
  }
  throw response;
};

axios.interceptors.request.use(requestIntercep);

axios.interceptors.response.use(checkResponseStatus, (error) => {
  throw error;
});

axios.interceptors.response.use(checkResponseCode);

async function request(url, options = {}) {
  return axios({
    url,
    ...options,
  });
}

export const RequestMethods = {
  GET: "GET",
  POST: "POST",
};

export default request;
