import { View, Text, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import BackBtn from "../components/atom/BackBtn";
import FormInput from "../components/atom/FormInput";
import { useFormik } from "formik";
import AppButton from "../components/atom/AppButton";
import GoogleLogin from "../components/molecule/GoogleLogin";
import { logInValidationSchema as validationSchema } from "../utils/yupValidationSchema";
import GoogleSignUpModal from "../components/organism/GoogleSignUpModal";
import { getUser } from "../../helper";

export default function Login({ navigation }: any) {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async () => {

    try{
      const data = await getUser({
        email: "efeethr@gmail.com",
        password: "12345678Ds",
      });
      navigation.replace("drawerTab");
      console.log(data);
    }
    catch(exception){
        console.log(exception)
    }
  };



  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <View style={styles.container}>
      <BackBtn navigation={navigation} />
      <View style={styles.viewText}>
        <Text style={styles.loginText}>Log in</Text>
        <Text style={styles.signup}>
          You are welcome back. You don’t have an account?{" "}
          <Text
            onPress={() => navigation.navigate("sighup")}
            style={{ color: "#25B14F" }}
          >
            Sign up here
          </Text>
        </Text>
        <View style={styles.form}>
          <View>
            <FormInput
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={formik.handleChange("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <Text style={{ color: "#d73a4a" }}>{formik.errors.email}</Text>
            )}
          </View>
          <View>
            {/* <PasswordFormInput password={formik.handleChange("password")} /> */}
            <FormInput
              placeholder="password"
              onChangeText={formik.handleChange("password")}
              type="password"
            />
            {formik.touched.password && formik.errors.password && (
              <Text style={{ color: "#d73a4a" }}>{formik.errors.password}</Text>
            )}
          </View>
        </View>
        <Text
          onPress={() => navigation.navigate("forgotPassword")}
          style={styles.forgetPasssword}
        >
          Forget Password?
        </Text>
        <AppButton text="Log In" onPress={() => formik.handleSubmit()} />
        <GoogleLogin />
      </View>
      <GoogleSignUpModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: hp(5.4),
  },
  viewText: {
    marginTop: hp(12.44),
    marginHorizontal: wp(5),
  },
  loginText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2D2D2D",
  },
  signup: {
    paddingRight: hp(8),
    fontSize: 16,
    marginTop: hp(0.5),
    color: "#7F7F7F",
  },
  form: {
    marginTop: hp(2.46),
    rowGap: hp(2.47),
  },
  forgetPasssword: {
    textAlign: "right",
    marginTop: hp(1),
    marginBottom: hp(2.46),
    fontSize: 16,
    color: "#25B14F",
  },
});
