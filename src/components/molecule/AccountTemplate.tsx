import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const AccountTemplate = ({ color,accountDetail }: { color: "plain" | "colored",accountDetail:string }) => {
  return (
    <View style={styles.innerContainer}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{ color: "#666666", fontSize: 12, fontWeight: "semibold" }}
        >
          Balance:
        </Text>
        <View
          style={[
            styles.primText,
            {
              backgroundColor: color === "colored" ? "#22A148" : "#F5F5F5",
              borderStyle: "dashed",
              borderWidth: 1,
              borderColor: color === "colored" ? "#22A148" : "black",
            },
          ]}
        >
          <Text
            style={{
              color: color === "colored" ? "#fff" : "black",
              fontSize: 12,
              fontWeight: "semibold",
            }}
          >
            {accountDetail}
          </Text>
        </View>
      </View>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>$250.03</Text>
      <Text style={{ fontWeight: "semibold", fontSize: 12 }}>
        Acc No. 2454 6767 90
      </Text>
      <Text style={{ marginTop: hp(8.5), color: "#404040", fontSize: 14 }}>
        Wema Bank
      </Text>
    </View>
  );
};

export default AccountTemplate;

const styles = StyleSheet.create({
  container: {
   
  },
  innerContainer: {
    width: "100%",
    height: hp(22.5),
    backgroundColor: "#F9F9F9",
    borderRadius: 20,
    paddingVertical: hp(2.46),
    paddingHorizontal: wp(5.33),
  },
  primText: {
    paddingHorizontal: wp(2.13),
    paddingVertical: hp(0.5),
    borderRadius: 50,
  },
});
