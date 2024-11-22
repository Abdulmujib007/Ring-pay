import { View, Text, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import React from "react";
import BackBtn from "../components/atom/BackBtn";
import FormInput from "../components/atom/FormInput";
import ArrowDownSvg from "../components/atom/icons/ArrowDownSvg";
import AppButton from "../components/atom/AppButton";

const WithdrawFund = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <BackBtn navigation={navigation} text="Withdraw Fund" columnGap={22.13} />
      <View style={styles.view}>
        <View>
          <Text
            style={{
              fontWeight: "semibold",
              fontSize: 14,
              marginBottom: hp(1),
            }}
          >
            Amount
          </Text>
          <FormInput onChangeText={() => {}} placeholder="$ 0.00" />
        </View>
        <View>
          <Text
            style={{
              fontWeight: "semibold",
              fontSize: 14,
              marginBottom: hp(1),
            }}
          >
            To Account
          </Text>
          <FormInput onChangeText={() => {}} placeholder="Select Account"  >
            <ArrowDownSvg/>
          </FormInput>
        </View>
        <AppButton text="Continue" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default WithdrawFund;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: hp(5.4),
  },
  view: {
    paddingHorizontal: wp(4.27),
    paddingTop: hp(3),
    rowGap:hp(2.46)
  },
});
