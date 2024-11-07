import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import PinInput2 from "../components/molecule/PinInput2";
import BackBtn from "../components/atom/BackBtn";
import AppButton from "../components/atom/AppButton";

const EnterPin = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <BackBtn navigation={navigation} />
      <Text style={styles.text}>Transaction Pin </Text>
      <Text style={styles.text2}>Enter your transaction pin</Text>
      <PinInput2 pinType="Enter" />
      <View style={styles.appBtn}>
        <AppButton text="Fund Card" />
      </View>
    </View>
  );
};

export default EnterPin;
const styles = StyleSheet.create({
  container: {
    paddingTop: hp(5.4),
    flex: 1,
    backgroundColor: "#fff",
  },
  appBtn: {
    paddingTop: hp(6.4),
    paddingHorizontal: wp(4.27),
  },
  text: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: hp(1.5),
  },
  text2: {
    textAlign: "center",
    fontSize: 16,
    color: "#7F7F7F",
  },
});
