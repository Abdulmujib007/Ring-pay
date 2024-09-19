import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
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

export default function SignUp({ navigation }: any) {
  const handleText = () => {};
  const [passwordShow, setPasswordShow] = useState(true);
  const [focusColor, setFocusColor] = useState(false);

  return (
    <View style={styles.container}>
      <KeyboardAvoidView>
        <View style={styles.backLogo}>
          <Pressable onPress={() => navigation.goBack()}>
            <BackSvg />
          </Pressable>
        </View>
        <View style={styles.textView}>
          <Text style={styles.createText}>Create Account</Text>
          <Text style={styles.lessThanMinText}>
            It takes less than a minute to create an account. Already have an
            account?
            <Text style={{ color: "#25B14F" }}> Log in here</Text>
          </Text>
          <View style={styles.formView}>
            <FormInput placeholder="First Name" onChangeText={handleText} />
            <FormInput placeholder="Last Name" onChangeText={handleText} />
            <FormInput
              placeholder="Email"
              onChangeText={handleText}
              keyboardType="email-address"
            />
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
                  onChangeText={handleText}
                  keyboardType="number-pad"
                />
              </View>
            </View>

            <FormInput
              placeholder="Password"
              onChangeText={handleText}
              secureTextEntry={passwordShow}
            >
              {passwordShow && (
                <PasswordShowSvg onPress={() => setPasswordShow(false)} />
              )}
              {!passwordShow && (
                <PasswordHideSvg onPress={() => setPasswordShow(true)} />
              )}
            </FormInput>
            <Pressable style={styles.createAccountBtn}>
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "semibold" }}
              >
                Create Account
              </Text>
            </Pressable>
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

  backLogo: {
    paddingVertical: hp(2),
    paddingLeft: wp(9.6),
  },
  textView: {
    paddingHorizontal: wp(4.27),
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
  createAccountBtn: {
    backgroundColor: "#41B63E",
    alignItems: "center",
    paddingVertical: hp(2),
    paddingHorizontal: wp(29),
    borderRadius: 50,
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
