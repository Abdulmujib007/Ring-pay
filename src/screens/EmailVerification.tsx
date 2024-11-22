import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BackBtn from "../components/atom/BackBtn";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import OtpVerification from "../components/molecule/OtpVerification";
import AppButton from "../components/atom/AppButton";

export default function EmailVerification({ navigation }: any) {
  const handleSubmit = () => {
    navigation.navigate("setpin");
  };
  return (
    <View style={styles.container}>
      <BackBtn navigation={navigation} />
      <View style={styles.emailVerif}>
        <Text style={styles.emailText}>Verify Your Email</Text>
        <Text style={styles.OtpText}>check your email for OTP code</Text>
      </View>
      <View style={{ paddingHorizontal: wp(4.8) }}>
        <OtpVerification count={6} />
      </View>
      <View style={styles.button}>
        <AppButton text="Continue" onPress={handleSubmit} />
      </View>
      <Text
        style={{
          textAlign: "center",
          paddingTop: hp(4.43),
          color: "#3BA638",
          fontWeight: "semibold",
          fontSize: 18,
        }}
      >
        Resend Code
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    paddingTop: hp(5.4),
  },
  emailVerif: {
    paddingTop: hp(14.53),
    paddingLeft: wp(4.27),
  },
  emailText: {
    fontWeight: "bold",
    fontSize: 26,
    paddingBottom: hp(1),
  },
  OtpText: {
    fontSize: 16,
    color: "#7F7F7F",
  },
  button: {
    paddingHorizontal: wp(4.27),
    paddingTop: hp(2.46),
  },
});
