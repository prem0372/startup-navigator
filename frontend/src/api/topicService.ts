import api from "../services/api";

export const getTopics = async () => {
  const response = await api.get("/topics");
  return response.data;
};