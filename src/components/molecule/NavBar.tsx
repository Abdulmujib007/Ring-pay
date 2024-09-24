import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import DrawerSvg from '../atom/icons/DrawerSvg';
import NotificationSvg from '../atom/icons/NotificationSvg';
import RingPaySvg from '../atom/icons/RingPaySvg';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';

const NavBar = () => {
  return (
    <View style={styles.homeBar}>
      <Pressable>
        <DrawerSvg />
      </Pressable>
      <View style={{ flexDirection: "row", columnGap: wp(2.13) }}>
        <RingPaySvg />
        <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
          RingPay
        </Text>
      </View>
      <NotificationSvg />
    </View>
  );
}

export default NavBar

const styles = StyleSheet.create({
  homeBar: {
    // position:'static',
    paddingVertical: hp(1.85),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: wp(5.33),
    paddingRight: wp(2.67),
  },
});