import { View, Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import UsaFlagSvg from "../components/atom/icons/UsaFlagSvg";
// import PasswordShowSvg from "../components/atom/icons/PasswordShowSvg";
import AntDesign from "@expo/vector-icons/AntDesign";
import SlantArrowSvg from "../components/atom/icons/SlantArrowSvg";
import GreenPlusSvg from "../components/atom/icons/GreenPlusSvg";
import TransactionSvg from "../components/atom/icons/TransactionSvg";
import { transactionData } from "../utils/constants";
import Transaction from "../components/molecule/Transaction";

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
      <Pressable
        style={{ marginLeft: wp(6.2), marginTop: hp(1.23) }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={24} color="white" />
      </Pressable>
      <View style={styles.flagView}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: wp(2.13),
            paddingVertical: hp(1),
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 50,
          }}
        >
          <UsaFlagSvg />
          <Text
            style={{
              marginLeft: 4,
              fontSize: 16,
              fontWeight: "bold",
              color: "#404040",
            }}
          >
            USD
          </Text>
        </View>
        <View
          style={{
            paddingVertical: hp(0.5),
            paddingHorizontal: wp(2),
            backgroundColor: "#fff",
            borderRadius: 50,
          }}
        >
          <Text>Primary Account</Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: "auto",
          flexDirection: "row",
          marginTop: hp(4),
          marginBottom: hp(1),
        }}
      >
        <Text
          style={{
            color: "#fff",
            marginRight: 8,
            fontSize: 12,
            fontWeight: "semibold",
          }}
        >
          Account Balance
        </Text>
        <AntDesign name="eyeo" size={15} color="white" />
      </View>
      <Text
        style={{
          color: "#fff",
          marginHorizontal: "auto",
          fontSize: 36,
          fontWeight: "bold",
        }}
      >
        $30,050.56
      </Text>
      <View style={{ marginTop: hp(3.33),  }}>
        <ScrollView horizontal={true} indicatorStyle="white" style={{paddingHorizontal:wp(4.5)}} >
          <View style={{flexDirection:'row',columnGap:wp(4.26)}}>
            <View style={styles.scrollViewItem}>
              <View style={styles.newView}>
                <SlantArrowSvg />
              </View>
              <Text
                style={{
                  marginHorizontal: "auto",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Transfer
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  paddingHorizontal: 5,
                  marginTop: 5,
                  color: "#7F7F7F",
                }}
              >
                Send or withdraw your Money
              </Text>
            </View>

            <View style={styles.scrollViewItem}>
              <View style={styles.newView}>
              <GreenPlusSvg/>
              </View>
              <Text
                style={{
                  marginHorizontal: "auto",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Add Money
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  paddingHorizontal: 5,
                  marginTop: 5,
                  color: "#7F7F7F",
                }}
              >
          Receive or fund Account
              </Text>
            </View>

            <View style={styles.scrollViewItem}>
              <View style={styles.newView}>
                <SlantArrowSvg />
              </View>
              <Text
                style={{
                  marginHorizontal: "auto",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Transfer
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  paddingHorizontal: 7,
                  marginTop: 5,
                  color: "#7F7F7F",
                }}
              >
                View or check your transaction 
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{marginVertical:hp(3),flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:wp(4.26)}}>
        <Text style={{fontSize:18,fontWeight:'bold'}} >Transactions</Text>
        <TransactionSvg/>
      </View>
      <ScrollView>

      <View style={{paddingHorizontal:wp(4.26),rowGap:hp(2)}}>
          {transactionData.map(({amount,amountColor,image,method,time}) => (
              <Transaction amount={amount} amountColor={amountColor} image={image} method={method} time={time} />
          ))}
      </View>
      </ScrollView>
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
  flagView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(4.27),
    paddingTop: hp(1.97),
  },
  scrollViewItem: {
    height: hp(18.72),
    width: wp(37.33),
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowRadius: 20,
    shadowColor: "gray",
    shadowOffset: { height: 10, width: 10 },
    shadowOpacity: 0.1,
  },
  newView: {
    marginHorizontal: "auto",
    paddingVertical: hp(1.35),
    paddingHorizontal: wp(2.66),
    borderRadius: 50,
    backgroundColor: "#EDF8FE",
    justifyContent: "center",
    marginTop: hp(2.46),
    marginBottom: hp(1.48),
  },
});
