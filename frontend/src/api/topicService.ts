import api from "./api";

export const getTopics = async () => {
  const response = await api.get("/topics");
  return response.data;
};