import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import DrawerSvg from "../components/atom/icons/DrawerSvg";
import RingPaySvg from "../components/atom/icons/RingPaySvg";
import NotificationSvg from "../components/atom/icons/NotificationSvg";
import PasswordShowSvg from "../components/atom/icons/PasswordShowSvg";
import Feather from "@expo/vector-icons/Feather";
import NavBar from "../components/molecule/NavBar";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.absoluteImg}
        source={require("../assets/balance.png")}
      />
      <NavBar />
      <ScrollView>
        <View style={{ paddingLeft: wp(7.33), paddingRight: wp(2.67) }}>
          <View style={styles.balanceText}>
            <Text
              style={{ color: "#fff", fontSize: 12, fontWeight: "semibold" }}
            >
              Primary Balance
            </Text>
            <Feather name="eye" size={20} color="white" />
          </View>
          <Text style={styles.balance}>$30,050.56</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: hp(5.4),
  },
  absoluteImg: {
    position: "absolute",
    resizeMode: "cover",
    width: "100%",
  },
 
  balanceText:{
    flexDirection:'row',
    alignItems:'center',
    columnGap: wp(2.67)
  },
  balance : {
    paddingTop:hp(1),
    paddingBottom:hp(2),
    fontSize:36,
    fontWeight:'bold',
    color:'#fff'
  }
});
