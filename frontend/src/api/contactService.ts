import api from "../services/api";

export async function sendContact(
  name: string,
  email: string,
  message: string
) {

  const response = await api.post("/contact", {
    name,
    email,
    message,
  });

  return response.data;

}