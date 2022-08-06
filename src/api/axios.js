import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getContentsHook = async () => {
  const { data } = await api.get("/posts");
  return data;
};
