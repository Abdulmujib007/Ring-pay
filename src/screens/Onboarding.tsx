import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppButton from "../components/atom/AppButton";
import { useDispatch } from "react-redux";
import { setOnBoarding } from "../utils/onBoardingSlice";

export default function Onboarding({ navigation }: any) {
  const dispatch = useDispatch();

  const handleSighup = () => {
    navigation.navigate("sighup");
    dispatch(setOnBoarding(true))
  };
  const handleLogin = () => {
      navigation.navigate("login");
      dispatch(setOnBoarding({onBoarding :true}))
    }

  return (
    <View style={styles.container}>
      <Image
        style={{ position: "absolute", height: "100%", width: "100%" }}
        source={require("../assets/onboarding.png")}
      />
      <View style={styles.textView}>
        <Text style={styles.text}>One App To Rule Them All</Text>
        <Text style={styles.smeText}>
          All In One Financial Services For SME’s & Freelancers
        </Text>
        <View style={styles.createBtn}>
          <AppButton text={"Create Account"} onPress={handleSighup} />
        </View>
      </View>
        <Text onPress={handleLogin} style={styles.login}>Already have an Account? Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // paddingTop: hp(5.4),
    // marginTop:hp(5.4)
  },
  textView: {
    marginTop: hp(60),
    paddingLeft: wp(11.73),
  },
  text: {
    color: "white",
    paddingRight: wp(30),
    fontSize: 32,
    fontWeight: "bold",
  },
  smeText: {
    fontSize: 16,
    color: "#fff",
    paddingRight: wp(30),
    paddingTop: hp(1),
  },
  createBtn: {
    paddingTop: hp(2.1),
    paddingRight: wp(11.73),
  },
  login: {
    color:'#fff',
    textAlign:'center',
    paddingTop: hp(1.72),
    fontSize: 14
  }
});
