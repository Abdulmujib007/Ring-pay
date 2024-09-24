import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import GoogleSvg from '../atom/icons/GoogleSvg'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useDispatch,  } from 'react-redux'
import { toggle1 } from '../../utils/modalSlice'

export default function GoogleLogin() {

  const dispatch = useDispatch()
  // const handleModalShow = () => {
  //   if(toggle == 'toggle1' ){
  //     dispatch(toggle1(true))
  //   } else {
  //     dispatch(toggle2(true))
  //   }
  // }
  return (
     <>
     <View style={styles.alternative}>
          <View
              style={{
                  borderTopWidth: 1,
                  borderTopColor: "#D7D7D7",
                  flexGrow: 1,
              }}
          ></View>
          <Text style={{ fontSize: 18, fontWeight: "semibold" }}>Or</Text>
          <View
              style={{
                  borderTopWidth: 1,
                  borderTopColor: "#D7D7D7",
                  flexGrow: 1,
              }}
          ></View>
      </View>
      <Pressable onPress={() => dispatch(toggle1(true))} style={styles.withGoogle}>
              <GoogleSvg />
              <Text style={{ fontSize: 18, fontWeight: "semibold" }}>
                  Continue With Google
              </Text>
          </Pressable>
          </>
  )
}

const styles = StyleSheet.create({
  alternative: {
    paddingHorizontal: wp(4.27),
    paddingTop: hp(3.45),
    paddingBottom: hp(3),
    flexDirection: "row",
    columnGap: 5,
    alignItems: "center",
  },
  withGoogle: {
    marginHorizontal: wp(4.27),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
    borderWidth: 1,
    borderColor: "#2D2D2D",
    borderRadius: 50,
    paddingVertical: hp(2),
  },
});