import api from "../services/api";

export async function getResources() {
  const response = await api.get("/resources");
  return response.data;
}

