import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CancelSvg from "../atom/icons/CancelSvg";
import DrawerBody from "../molecule/DrawerBody";
import ExpensesSvg from "../atom/icons/ExpensesSvg";
import CardSvg from "../atom/icons/CardSvg";
import PayrollSvg from "../atom/icons/PayrollSvg";
import ProfileSvg from "../atom/icons/ProfileSvg";
import SettingsSvg from "../atom/icons/SettingsSvg";
import LogoutSvg from "../atom/icons/LogoutSvg";
import { NavigationContainerProps, useNavigation } from "@react-navigation/native";

const DrawerContent = (props: DrawerContentComponentProps) => {
    const {navigation} = props
    const stackNavigation : any = useNavigation()
  return (
    <View
      style={{ marginTop: hp(7.9), paddingHorizontal: wp(5.33) }}
      {...props}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("bottomTab")}
          style={{
            flexDirection: "row",
            columnGap: wp(2.67),
            alignItems: "center",
          }}
        >
          <Image source={require("../../assets/Ellipse 5.png")} />
          <View>
            <Text style={{ fontWeight: "semibold", fontSize: 16 }}>
              John Doe
            </Text>
            <Text style={{ color: "#737373", fontSize: 12, marginTop: 2 }}>
              Johndoe@gmail.com
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.closeDrawer()}>
          <CancelSvg />
        </Pressable>
      </View>
      <View style={{ marginTop: hp(4.93), rowGap: hp(0.7) }}>
        <DrawerBody
          image={<ExpensesSvg />}
          navigation={navigation}
          navigateTo="Expenses"
        />
        <DrawerBody
          image={<CardSvg />}
          navigateTo="Payment"
          navigation={navigation}
        />
        <DrawerBody
          image={<PayrollSvg />}
          navigateTo="Payroll"
          navigation={navigation}
        />
        <DrawerBody
          image={<ProfileSvg />}
          navigateTo="Profile"
          navigation={navigation}
        />
        <DrawerBody
          image={<SettingsSvg />}
          navigateTo="Settings"
          navigation={navigation}
        />
        <Pressable
          style={{
            marginTop: hp(34),
            flexDirection: "row",
            alignItems: "center",
            columnGap: wp(5.33),
            paddingLeft:wp(5.33),
            paddingTop:hp(1.97)
          }}
          onPress={() => stackNavigation.replace('login') }
        >
          <LogoutSvg />
          <Text
            style={{ fontSize: 16, fontWeight: "semibold", color: "#707070" }}
          >
            Logout
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DrawerContent;
