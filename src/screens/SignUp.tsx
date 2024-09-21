import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { ChangeEvent, useState } from "react";
import BackSvg from "../components/atom/icons/BackSvg";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import FormInput from "../components/atom/FormInput";
import KeyboardAvoidView from "../components/molecule/KeyboardAvoidView";
import PasswordShowSvg from "../components/atom/icons/PasswordShowSvg";
import PasswordHideSvg from "../components/atom/icons/PasswordHideSvg";
import { TextInput } from "react-native-gesture-handler";
import CountrySvg from "../components/atom/icons/CountrySvg";
import ArrowDownSvg from "../components/atom/icons/ArrowDownSvg";
import GoogleSvg from "../components/atom/icons/GoogleSvg";
import BackBtn from "../components/atom/BackBtn";
import { useFormik } from "formik";
import * as yup from "yup";
import AppButton from "../components/atom/AppButton";

export default function SignUp({ navigation }: any) {
  const handleText = () => {};
  const [passwordShow, setPasswordShow] = useState(true);
  const [focusColor, setFocusColor] = useState(false);

  const validationSchema = yup.object().shape({
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

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  };

  const onSubmit = () => {
    navigation.navigate("emailVerification");
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
            <Text style={{ color: "#25B14F" }}> Log in here</Text>
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
                placeholder="Password"
                onChangeText={formik.handleChange("password")}
                secureTextEntry={passwordShow}
              >
                {passwordShow && (
                  <PasswordShowSvg onPress={() => setPasswordShow(false)} />
                )}
                {!passwordShow && (
                  <PasswordHideSvg onPress={() => setPasswordShow(true)} />
                )}
              </FormInput>
              {formik.touched.password && formik.errors.password && (
                <Text style={{ color: "#d73a4a" }}>
                  {formik.errors.password}
                </Text>
              )}
            </View>
           
            <AppButton onPress={(e: any) => formik.handleSubmit(e)} text="Create Account" />
          </View>
        </View>
        <View style={styles.alternative}>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: "#D7D7D7",
              flexGrow: 1,
            }}
          ></View>
          <Text style={{ fontSize: 18, fontWeight: "semibold" }}>Or</Text>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: "#D7D7D7",
              flexGrow: 1,
            }}
          ></View>
        </View>
        <Pressable style={styles.withGoogle}>
          <GoogleSvg />
          <Text style={{ fontSize: 18, fontWeight: "semibold" }}>
            Continue With Google
          </Text>
        </Pressable>
      </KeyboardAvoidView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
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
  alternative: {
    paddingHorizontal: wp(4.27),
    paddingTop: hp(3.45),
    paddingBottom: hp(3),
    flexDirection: "row",
    columnGap: 5,
    // justifyContent:'sp'
    alignItems: "center",
  },
  withGoogle: {
    marginHorizontal: wp(4.27),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
    borderWidth: 1,
    borderColor: "#2D2D2D",
    borderRadius: 50,
    paddingVertical: hp(2),
  },
});
