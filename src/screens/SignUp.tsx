import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import FormInput from "../components/atom/FormInput";
import KeyboardAvoidView from "../components/molecule/KeyboardAvoidView";
import { TextInput } from "react-native-gesture-handler";
import CountrySvg from "../components/atom/icons/CountrySvg";
import ArrowDownSvg from "../components/atom/icons/ArrowDownSvg";
import BackBtn from "../components/atom/BackBtn";
import { FormikValues, useFormik } from "formik";
import AppButton from "../components/atom/AppButton";
import GoogleLogin from "../components/molecule/GoogleLogin";
// import PasswordFormInput from "../components/molecule/PasswordFormInput";
import { signUpValidationSchema as validationSchema } from "../utils/yupValidationSchema";
import GoogleSignUpModal from "../components/organism/GoogleSignUpModal";
import { addUser } from "../../helper";

export default function SignUp({ navigation }: any) {
  const [focusColor, setFocusColor] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  };

  const onSubmit = async (values: FormikValues) => {
    console.log(
      values.firstName,
      values.lastName,
      values.email,
      values.password
    );
    try {
      const newUser = await addUser({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      });
      console.log(newUser);
      navigation.navigate("emailVerification");
    } catch (exception) {
      console.log(exception);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <KeyboardAvoidView>
        <BackBtn navigation={navigation} />
        <View style={styles.textView}>
          <Text style={styles.createText}>Create Account</Text>
          <Text style={styles.lessThanMinText}>
            It takes less than a minute to create an account. Already have an
            account?
            <Text
              onPress={() => navigation.navigate("login")}
              style={{ color: "#25B14F" }}
            >
              {" "}
              Log in here
            </Text>
          </Text>
          <View style={styles.formView}>
            <View>
              <FormInput
                placeholder="First Name"
                onChangeText={formik.handleChange("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <Text style={{ color: "#d73a4a" }}>
                  {formik.errors.firstName}
                </Text>
              )}
            </View>
            <View>
              <FormInput
                placeholder="Last Name"
                onChangeText={formik.handleChange("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <Text style={{ color: "#d73a4a" }}>
                  {formik.errors.lastName}
                </Text>
              )}
            </View>
            <View>
              <FormInput
                placeholder="Email"
                onChangeText={formik.handleChange("email")}
                keyboardType="email-address"
              />
              {formik.touched.email && formik.errors.email && (
                <Text style={{ color: "#d73a4a" }}>{formik.errors.email}</Text>
              )}
            </View>
            <View>
              <View
                style={[
                  styles.countryView,
                  {
                    borderWidth: focusColor === true ? 1 : 0,
                    borderColor: focusColor === true ? "green" : "none",
                  },
                ]}
              >
                <View style={styles.countryFlag}>
                  <CountrySvg />
                  <ArrowDownSvg />
                </View>
                <View
                  style={{ paddingLeft: wp(4.26), paddingVertical: hp(1.05) }}
                >
                  <Text style={{ color: "#7F7F7F" }}>Phone Number</Text>
                  <TextInput
                    onFocus={() => setFocusColor(true)}
                    onBlur={() => setFocusColor(false)}
                    style={styles.textInput}
                    placeholder="+1"
                    onChangeText={formik.handleChange("phoneNumber")}
                    keyboardType="number-pad"
                  />
                </View>
              </View>
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <Text style={{ color: "#d73a4a" }}>
                  {formik.errors.phoneNumber}
                </Text>
              )}
            </View>

            <View>
              <FormInput
                placeholder="password"
                onChangeText={formik.handleChange("password")}
                type="password"
              />
              {formik.touched.password && formik.errors.password && (
                <Text style={{ color: "#d73a4a" }}>
                  {formik.errors.password}
                </Text>
              )}
            </View>
            <AppButton
              onPress={(e: any) => formik.handleSubmit(e)}
              text="Create Account"
            />
          </View>
        </View>
        <GoogleLogin />
      </KeyboardAvoidView>
      <GoogleSignUpModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: hp(5.4),
  },

  textView: {
    paddingHorizontal: wp(4.27),
    paddingTop: hp(2),
  },
  createText: {
    fontWeight: "bold",
    fontSize: 26,
  },
  lessThanMinText: {
    paddingTop: hp(1),
    fontSize: 16,
    color: "#7F7F7F",
    lineHeight: 22,
  },
  formView: {
    paddingVertical: hp(2.46),
    rowGap: hp(2.46),
  },
  textInput: {
    fontWeight: "semibold",
    fontSize: 14,
    color: "#7F7F7F",
    width: wp(36.67),
  },
  countryView: {
    backgroundColor: "#F5F5F5",
    borderRadius: 50,
    flexDirection: "row",
  },
  countryFlag: {
    paddingVertical: hp(1.76),
    paddingHorizontal: wp(4.3),
    flexDirection: "row",
    columnGap: 7,
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#7F7F7F",
  },
});
