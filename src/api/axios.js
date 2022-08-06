import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getContentsHook = async () => {
  const { data } = await api.get("/posts?_page=1&_limit=10");
  return data;
};
