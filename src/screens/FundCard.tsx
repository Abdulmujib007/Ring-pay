import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import BackBtn from "../components/atom/BackBtn";
import FormInput from "../components/atom/FormInput";
import ArrowDownSvg from "../components/atom/icons/ArrowDownSvg";
import AppButton from "../components/atom/AppButton";

const FundCard = ({ navigation }: any) => {

    const handleTextChange = () => {}
  return (
    <View style={styles.container}>
      <BackBtn navigation={navigation} text="Fund Card" columnGap={29} />
      <View style={styles.fundView}>
        <View>
          <Text
            style={{
              fontWeight: "semibold",
              fontSize: 14,
              color: "#404040",
              marginBottom: hp(1.5),
            }}
          >
            From Account
          </Text>
          <FormInput
            keyboardType="numeric"
            placeholder="Select Account"
            onChangeText={handleTextChange}
          >
            <ArrowDownSvg />
          </FormInput>
        </View>
        <View>
          <Text
            style={{
              fontWeight: "semibold",
              fontSize: 14,
              color: "#404040",
              marginBottom: hp(1.5),
            }}
          >
            Amount
          </Text>
          <FormInput
            keyboardType="numeric"
            placeholder="$ 0.00"
            onChangeText={handleTextChange}
          />
       
        </View>
        <AppButton text="Continue"  />
      </View>
    </View>
  );
};

export default FundCard;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingTop: hp(5.4),
  },
  fundView: {
    paddingHorizontal: wp(4.26),
    paddingTop: hp(3.81),
    rowGap:hp(2.46)
  },
});
