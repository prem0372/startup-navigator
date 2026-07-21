import api from "../services/api";

export async function askAI(prompt: string) {

  const response = await api.post("/ai/recommend", {
    prompt: prompt,
  });

  return response.data;

}