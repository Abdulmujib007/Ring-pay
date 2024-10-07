import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import BackBtn from '../components/atom/BackBtn';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import NigeriaFlagSvg from '../components/atom/icons/NigeriaFlagSvg';
import ArrowDownSvg from '../components/atom/icons/ArrowDownSvg';
import AppButton from '../components/atom/AppButton';

export default function SetCurrency({navigation } :any) {
     
    const  handleSetCurrency = () => {
      navigation.replace('drawerTab')
    }

  return (
    <View style={styles.container}>
      <BackBtn navigation={navigation} />
      <Text style={styles.primaryCurr}>Set Primary Currency</Text>
      <Text style={styles.chooseText}>
        Choose the primary currency for your account. This can not be changed
      </Text>
      <View style={styles.inputView}>
        <TextInput style={styles.textInput} placeholder="Select Currency" />
        <View style={styles.flagView}>
          <NigeriaFlagSvg />
          <Text style={{ color: "#404040",fontSize: 16, fontWeight:'bold' }}>NGN</Text>
          <ArrowDownSvg />
        </View>
      </View>
      <View style={styles.button}>
        <AppButton text='Set Currency' onPress={handleSetCurrency} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: hp(5.4),
  },
  primaryCurr: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: hp(7.14),
  },
  chooseText: {
    textAlign: "center",
    marginHorizontal: wp(15.47),
    fontSize: 16,
    marginTop: hp(1),
    color: "#7F7F7F",
  },
  inputView: {
    marginTop: hp(5),
    marginHorizontal: wp(4.27),
    paddingHorizontal: wp(4.27),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ECF8EC",
    borderRadius: 50,
    paddingVertical: hp(0.7),
  },
  textInput: {
    color: "#404040",
    fontSize: 16,
    width: "65%",
  },
  flagView: {
    flexDirection: "row",
    paddingHorizontal: wp(2.67),
    paddingVertical: hp(1),
    backgroundColor: "#fff",
    borderRadius: 50,
    alignItems: "center",
    justifyContent:'center',
    columnGap: 5,
  },
  button: {
    marginTop: hp(2.46),
    marginHorizontal: wp(4.27),
  },
});