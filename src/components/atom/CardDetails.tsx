import { View, Text, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CopyTextSvg from "./icons/CopyTextSvg";

interface CardProps {
  header: string;
  text: string;
  width?: number;
}

const CardDetails = ({ header, text, width }: CardProps) => {
  return (
    <View style={{ rowGap: hp(1), width: width ? wp(width) : "100%" }}>
      <Text style={styles.cardText1}>{header}</Text>
      <View style={styles.cardView}>
        <Text style={styles.cardText2}>{text}</Text>
        <CopyTextSvg />
      </View>
    </View>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  cardText1: {
    fontSize: 16,
    color: "#7F7F7F",
  },
  cardViewContainer: {},
  cardView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardText2: {
    fontSize: 18,
    color: "#404040",
  },
});
