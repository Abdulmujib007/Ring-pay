import { View, Text, Image, ImageSourcePropType, StyleSheet } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface TransactionProps {
  time: string;
  method: "Payroll" | "Expenses" | "Fund Wallet" | "Receive Fund";
  amount: string;
  image: ImageSourcePropType;
  amountColor: "#F04343" | "#41B63E";
}

const Transaction = ({time,amount,amountColor,image,method}:TransactionProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          columnGap: wp(2.13),
          alignItems: "center",
        }}
      >
        <Image source={image} />
        <View>
          <Text
            style={{ fontSize: 12, fontWeight: "semibold", color: "#AEAEAE" }}
          >
            {time}
          </Text>
          <Text style={{fontSize:14,fontWeight:'semibold'}} >{method}</Text>
        </View>
      </View>
      <Text style={{ color: amountColor,fontWeight:'bold',fontSize:14 }}>{amount}</Text>
    </View>
  );
}

export default Transaction
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    paddingHorizontal: wp(4.27),
    paddingVertical: hp(1.97),
    borderRadius:12
  },
});