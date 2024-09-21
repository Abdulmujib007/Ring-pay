import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface Button {
  onPress?: (e: any) => void;
  text: string;
}

export default function AppButton({ onPress, text }: Button) {
  return (
    <Pressable onPress={onPress} style={styles.createAccountBtn}>
      <View>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "semibold" }}>
          {text}
        </Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  createAccountBtn: {
    backgroundColor: "#41B63E",
    alignItems: "center",
    paddingVertical: hp(2),
    borderRadius: 50,
  },
});
