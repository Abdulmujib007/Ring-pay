import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BackBtn from "../components/atom/BackBtn";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import OtpVerification from "../components/molecule/OtpVerification";
import AppButton from "../components/atom/AppButton";

const ChangePin = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <BackBtn navigation={navigation} />
      <View style={styles.view}>
        <Text
          style={{
            textAlign: "center",
            color: "#2D2D2D",
            fontWeight: "bold",
            fontSize: 26,
          }}
        >
          Change Card Pin
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "#7F7F7F",
            fontSize: 16,
            marginTop: hp(1),
            marginBottom: hp(2.46),
          }}
        >
          Set a new pin for your virtual Card
        </Text>
        <View style={{ paddingHorizontal: wp(5),marginBottom:hp(2.46) }}>
          <OtpVerification count={4} />
        </View>
        <AppButton text="Set Pin"  onPress={() => navigation.navigate('singlecard')}/>
      </View>
    </View>
  );
};

export default ChangePin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: hp(5.4),
  },
  view: {
    marginTop: hp(16.3),
    paddingHorizontal: wp(10),
  },
});
