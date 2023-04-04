import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

console.log(process.env.API);
const apiClient: AxiosInstance = axios.create({
  baseURL:
    typeof window === "undefined"
      ? `${process.env.API}`
      : "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.response.use(
  (response: AxiosResponse): Promise<AxiosResponse> =>
    Promise.resolve(response),
  (error: AxiosError) => Promise.reject(error)
);

export default apiClient;
