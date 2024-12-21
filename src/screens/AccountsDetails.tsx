import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Accounts = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute" }}>
        <Image
          style={styles.absoluteImg}
          source={require("../assets/account-single-card.png")}
        />
        <View style={styles.emptyView}></View>
      </View>
      <Pressable style={{marginLeft:wp(6.67),marginTop:hp(1.23)}} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(5.4),
    flex: 1,
    backgroundColor: "#fff",
  },
  absoluteImg: {
    // position: "absolute",
    resizeMode: "cover",
    backgroundColor: "red", // width: "100%",
    right: 80,
  },
  emptyView: {
    backgroundColor: "#41B63E",
    position: "absolute",
    right: 0,
    height: 320,
    width: "20%",
  },
});
