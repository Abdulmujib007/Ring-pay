import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Feather from "@expo/vector-icons/Feather";
import NavBar from "../components/molecule/NavBar";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import QuickAccessCards from "../components/atom/QuickAccessCards";
import { quickAccessData } from "../utils/constants";
import Transaction from "../components/molecule/Transaction";
import { transactionData } from "../utils/constants";
import { NavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function Home({navigation}: any) {
  const separatorComponent = () => {
    return <View style={styles.flatListSeparator}></View>;
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.absoluteImg}
        source={require("../assets/balance.png")}
      />
      <NavBar svgColor="White" />
      <ScrollView showsVerticalScrollIndicator={false} >
        <View
          style={{
            paddingLeft: wp(7.33),
            paddingRight: wp(2.67),
            paddingTop: hp(2.71),
          }}
        >
          <View style={styles.balanceText}>
            <Text
              style={{ color: "#fff", fontSize: 12, fontWeight: "semibold" }}
            >
              Primary Balance
            </Text>
            <Feather name="eye" size={12} color="white" />
          </View>
          <Text style={styles.balance}>$30,050.56</Text>
          <View style={{ flexDirection: "row", columnGap: wp(2.47) }}>
            <Pressable style={styles.transferBtn}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "semibold",
                  color: "#1B1B1B",
                }}
              >
                Make Transfer
              </Text>
            </Pressable>
            <Pressable style={styles.addMoneyBtn}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "semibold",
                  color: "#fff",
                }}
              >
                Add Money
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.content}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: hp(2),
              paddingHorizontal: wp(4.27),
            }}
          >
            Quick Access
          </Text>
          <FlatList
            horizontal={true}
            data={quickAccessData}
            ItemSeparatorComponent={separatorComponent}
            showsHorizontalScrollIndicator={false}
            style={{ paddingHorizontal: wp(4.27) }}
            renderItem={({ item }) => {
              return (
                <QuickAccessCards
                  text={item.text}
                  imgSource={item.imageSource}
                />
              );
            }}
          />
        </View>
        <View style={{ paddingHorizontal: wp(4.27), paddingBottom: hp(3.94),backgroundColor:'white' }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: hp(3.57),
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Transactions
            </Text>
            <Pressable>
              <Text style={{ fontSize: 14, color: "#41B63E" }}>See all</Text>
            </Pressable>
          </View>
          <View style={{rowGap:hp(1.97)}}>
            {transactionData.map(
              ({ amount, amountColor, image, method, time },index) => (
                <Transaction
                key={index}
                  amount={amount}
                  amountColor={amountColor}
                  image={image}
                  method={method}
                  time={time}
                />
              )
            )}
          </View>
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

  balanceText: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(2.67),
  },
  balance: {
    paddingTop: hp(1),
    paddingBottom: hp(2),
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
  },
  transferBtn: {
    paddingHorizontal: wp(4.27),
    paddingVertical: hp(1),
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  addMoneyBtn: {
    paddingHorizontal: wp(4.27),
    paddingVertical: hp(1),
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 50,
  },
  content: {
    marginTop: hp(8.74),
    paddingTop: hp(3.94),
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: hp(3.57),
  },
  flatListSeparator: {
    width: wp(4),
  },
});
