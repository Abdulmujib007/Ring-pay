import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import NavBar from "../components/molecule/NavBar";
import BritainFlagSvg from "../components/atom/icons/BritainFlagSvg";
import ArrowDownSvg from "../components/atom/icons/ArrowDownSvg";
import UsaFlagSvg from "../components/atom/icons/UsaFlagSvg";
import AccountTemplate from "../components/molecule/AccountTemplate";
import { ScrollView } from "react-native-gesture-handler";

const FullAccount = () => {
  return (
    <View style={styles.container}>
      <NavBar svgColor="Dark" />
      <View style={styles.containerView}>
        <View>
          <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 3 }}>
            Your Accounts
          </Text>
          <Text style={{ fontSize: 14, color: "#666666" }}>
            Manage all your bank accounts
          </Text>
        </View>
        <View style={styles.flagView}>
          <UsaFlagSvg />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>USD</Text>
          <ArrowDownSvg />
        </View>
      </View>
      <ScrollView>
        <View style={styles.scroll}>
          <AccountTemplate accountDetail="Primary Account" color={"colored"} />
          <AccountTemplate accountDetail="Shopping" color="plain" />
          <AccountTemplate color="plain" accountDetail="Purchase" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(5.4),
    flex: 1,
    backgroundColor: "#fff",
  },
  containerView: {
    paddingHorizontal: wp(4.26),
    marginTop: hp(2.0),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flagView: {
    backgroundColor: "#F9F9F9",
    borderRadius: 50,
    paddingHorizontal: wp(2.13),
    paddingVertical: hp(1),
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
  },
  scroll: {
    paddingVertical: hp(2.71),
    paddingHorizontal: wp(4.26),
    rowGap: hp(1.7),
  },
});

export default FullAccount;
