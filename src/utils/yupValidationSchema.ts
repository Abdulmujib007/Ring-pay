 import * as yup from 'yup'
 export  const signUpValidationSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(6, "Minimum character is six")
      .required("First Name is required"),
    lastName: yup
      .string()
      .min(6, "Minimum character is six")
      .required("Last Name is required"),
    email: yup
      .string()
      .min(6, "Minimum character is six")
      .required("Email is required"),
    phoneNumber: yup
      .number()
      .min(6, "Minimum character is six")
      .required("Phone Number is required"),
    password: yup
      .string()
      .min(6, "Minimum character is six")
      .required("Password is required"),
  });

  export const logInValidationSchema = yup.object().shape({
    email: yup.string().required("Email is required for Login"),
    password: yup.string().required("Password is required for Login"),
  });