import axios from "axios";
const baseUrl = "https://hospital-ooo.vercel.app";
const signInUrl = `${baseUrl}/user/signin`;
const signUpUrl = `${baseUrl}/user/signup` 

export const getUser = async (userData) => {
  const result = await axios.post(signInUrl, userData);

  return result.data;
};
export const addUser = async (newUserData) => {
  const response = await axios.post(signUpUrl,newUserData)
  return response.data
}
// export default {getUser}
// firstName
// lastName
// email
// password
