import axios from "axios";

const API_BASE_URL = "http://localhost:6500"; // آدرس اصلی API

export const login = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/auth/send-otp`, data);
  return response.data;
};
