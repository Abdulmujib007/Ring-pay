import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BackBtn from '../components/atom/BackBtn'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'
import PinInput from '../components/molecule/PinInput';
import PinInput2 from '../components/molecule/PinInput2';
import AppButton from '../components/atom/AppButton';
// import PinInput from '../components/molecule/PinInput';

export default function SetPin({navigation} : any) {

  const handleSetPin = () => {
      navigation.navigate('setcurrency')
  }
  return (
    <View style={styles.container}>
      <BackBtn navigation={navigation} />
      <Text style={styles.pinText}>Set Transaction Pin</Text>
      <Text style={styles.requiredText}>
        This pin will be required whenever you want to carryout a transaction,
        keep it safe.
      </Text>
      {/* <View style={{flex: 1}} >  */}
      <PinInput2 pinType='Set'/>
      {/* </View> */}
      <View style={{paddingHorizontal:wp(4.26)}}>
      <AppButton text='Set pin' onPress={handleSetPin}/>

      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: hp(5.4),
  },
  pinText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 26,
    paddingVertical: hp(1),
  },
  requiredText: {
    textAlign: "center",
    paddingHorizontal: wp(10),
    fontSize: 16,
    color: "#7F7F7F",
    // width: wp(84)
  },
});