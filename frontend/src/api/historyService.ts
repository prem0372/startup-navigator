import api from "../services/api";

export async function getHistory() {

  const response = await api.get("/history");

  return response.data;

}