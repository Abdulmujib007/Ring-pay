import axios from "axios";
import { baseUrl } from "./src/utils/config";
import Toast from "react-native-toast-message";

export const getUser = async (userInfo) => {
  try {
    const { data } = await axios.post(`${baseUrl}/auth/login`,
      userInfo
    );
    return data;
  } catch (error) {
    console.log({ error });
    Toast.show({
      type: "error",
      text1: "Invalid Email or Password",
      text2: "pls try again",
      visibilityTime: 5000,
    });
  }
};
export const addUser = async (newUserData) => {
  const response = await axios.post(signUpUrl, newUserData);
  return response.data;
};
