import axios from "axios";
const baseUrl = "https://hospital-ooo.vercel.app";
const signInUrl = `${baseUrl}/user/signin`;

export const getUser = async (userData) => {
  const result = await axios.post(signInUrl, userData);

  return result.data;
};
// export default {getUser}
