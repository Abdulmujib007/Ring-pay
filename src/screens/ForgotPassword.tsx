import { View, Text, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import BackBtn from "../components/atom/BackBtn";
import AppButton from "../components/atom/AppButton";
import FormInput from "../components/atom/FormInput";
import CustomButtomSheet from "../components/molecule/CustomButtomSheet";
import BottomSheet, { useBottomSheet } from "@gorhom/bottom-sheet";
import OtpVerification from "../components/molecule/OtpVerification";

export default function ForgotPassword({ navigation }: { navigation: any }) {
  const handleTextChange = () => {};
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [showOtp, setShowOtp] = useState(true);
  const [showButtonSheet, setShowButtonSheet] = useState(false);
  const handleShowButtomSheet = () => {
    setShowButtonSheet(true);
  };
  const handleResetPassword = () => {}
  return (
    <View style={styles.container}>
      <BackBtn navigation={navigation} />
      <View style={styles.contentView}>
        <View style={{ paddingRight: wp(9) }}>
          <Text
            style={{ fontSize: 26, fontWeight: "bold", marginBottom: hp(1) }}
          >
            Forgot Password
          </Text>
          <Text style={{ fontSize: 16, color: "#7F7F7F" }}>
            Enter your account email to reset your password. Know your password?
            <Text
              onPress={() => navigation.navigate("login")}
              style={{ color: "#25B14F" }}
            >
              {" "}
             Log in here
            </Text>
          </Text>
        </View>
        <FormInput
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={handleTextChange}
        />
        <AppButton onPress={handleShowButtomSheet} text="Continue" />
      </View>
      {showButtonSheet && (
        <CustomButtomSheet>
          {showOtp && (
            <View style={{ paddingHorizontal: wp(4.27) }}>
              <Text style={styles.bottomSheetOtpText}>Enter OTP</Text>
              <Text style={{ fontSize: 16, color: "#7F7F7F" }}>
                Check your email for password reset OTP code
              </Text>
              <OtpVerification  count={6}/>
              <View style={{ paddingTop: hp(2.46), paddingBottom: hp(4.43) }}>
                <AppButton text="Continue" onPress={() => setShowOtp(false)} />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "semibold",
                  color: "#3BA638",
                }}
              >
                Resend Code
              </Text>
            </View>
          )}
          {!showOtp && (
            <View style={{ paddingHorizontal: wp(4.27) }}>
              <Text style={styles.bottomSheetOtpText}>Set New Password</Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#7F7F7F",
                  paddingBottom: hp(2.46),
                }}
              >
                Enter your new password below.
              </Text>
              <FormInput
                placeholder="Password"
                type="password"
                onChangeText={handleResetPassword}
              />
              <View style={{ paddingTop: hp(2.46) }}>
                <AppButton
                  onPress={() => navigation.navigate("login")}
                  text="Submit"
                />
              </View>
            </View>
          )}
        </CustomButtomSheet>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: hp(5.4),
    flex: 1,
    backgroundColor: "#fff",
  },
  contentView: {
    paddingHorizontal: wp(6.5),
    paddingTop: hp(14.6),
    rowGap: hp(2.46),
  },
  bottomSheetOtpText: {
    paddingVertical: hp(1),
    fontSize: 26,
    fontWeight: "bold",
  },
});
