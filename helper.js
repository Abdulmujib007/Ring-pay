import axios from "axios";
// const baseUrl = "https://hospital-ooo.vercel.app";
// const signInUrl = `${baseUrl}/user/signin`;
// const signUpUrl = `${baseUrl}/user/signup` 
const baseUrl = 'https://dummyjson.com'

export const getUser = async (userInfo) => {

  
  console.log(userInfo)
  try{
    const  {data} = await axios.post(
      "https://dummyjson.com/auth/login",
      userInfo
    );
    console.log({data})
    return data
  }catch(error) {
      console.log({error})
  }

};
export const addUser = async (newUserData) => {
  const response = await axios.post(signUpUrl,newUserData)
  return response.data
}