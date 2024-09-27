import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import DrawerSvg from "../atom/icons/DrawerSvg";
import NotificationSvg from "../atom/icons/NotificationSvg";
import RingPaySvg from "../atom/icons/RingPaySvg";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import DarkDrawerSvg from "../atom/icons/DarkDrawerSvg";
import DarkRingPaySvg from "../atom/icons/DarkRingPaySvg";
import DarkNotificationSvg from "../atom/icons/DarkNotificationSvg";

const NavBar = ({ svgColor }: { svgColor: "White" | "Dark" }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.homeBar}>
      <Pressable
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        {svgColor === "White" ? <DrawerSvg /> : <DarkDrawerSvg />}
      </Pressable>
      <View style={{ flexDirection: "row", columnGap: wp(2.13) }}>
        {svgColor === "White" ? <RingPaySvg /> : <DarkRingPaySvg />}
        <Text style={{ color: svgColor === 'White' ? "#fff" : 'black', fontSize: 24, fontWeight: "bold" }}>
          RingPay
        </Text>
      </View>
      {
        svgColor === 'White' ?
      <NotificationSvg /> :
      <DarkNotificationSvg/>

      }
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  homeBar: {
    // position:'static',
    paddingVertical: hp(1.85),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: wp(5.33),
    paddingRight: wp(2.67),
  },
});
