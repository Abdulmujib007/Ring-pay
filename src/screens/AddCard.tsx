import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import BackBtn from "../components/atom/BackBtn";
import NigeriaFlagSvg from "../components/atom/icons/NigeriaFlagSvg";
import ArrowDownSvg from "../components/atom/icons/ArrowDownSvg";
import FormInput from "../components/atom/FormInput";
import AppButton from "../components/atom/AppButton";


const AddCard = ({ navigation }: any) => {
  const handlePress = () => {
    navigation.replace('card')
  }
  return (
    <View style={styles.container}>
      <BackBtn navigation={navigation} text="New Card" columnGap={29.33} />
      <View style={styles.view}>
        <Text style={{ marginTop: hp(2.83), color: "#404040" }}>
          You will be charged $4 to create a new card
        </Text>
        <View style={{ marginTop: hp(2.46), rowGap: hp(2.46) }}>
          <View>
            <Text
              style={{
                marginBottom: hp(0.9),
                fontSize: 14,
                fontWeight: "semibold",
                color: "#404040",
              }}
            >
              Name on card
            </Text>
            <FormInput onChangeText={() => {}} placeholder="e.g John Doe" />
          </View>
          <View style={styles.inputView}>
            <TextInput style={styles.textInput} placeholder="Select Currency" />
            <View style={styles.flagView}>
              <NigeriaFlagSvg />
              <Text
                style={{ color: "#404040", fontSize: 16, fontWeight: "bold" }}
              >
                NGN
              </Text>
              <ArrowDownSvg />
            </View>
          </View>
          <View>
            <Text
              style={{
                marginBottom: hp(0.9),
                fontSize: 14,
                fontWeight: "semibold",
                color: "#404040",
              }}
            >
              Select Account
            </Text>
            <FormInput onChangeText={() => {}} placeholder="Select Account" />
          </View>
          <AppButton text="Create Card" onPress={handlePress} />
        </View>
      </View>
    </View>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(5.4),
    flex: 1,
    backgroundColor: "#fff",
  },
  view: {
    paddingHorizontal: wp(4.27),
  },

  inputView: {
    paddingHorizontal: wp(4.27),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F9F9F9",
    borderRadius: 50,
    paddingVertical: hp(0.7),
  },
  textInput: {
    color: "#404040",
    fontSize: 16,
    width: "65%",
  },
  flagView: {
    flexDirection: "row",
    paddingHorizontal: wp(2.67),
    paddingVertical: hp(1),
    backgroundColor: "#fff",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    columnGap: 5,
  },
});
