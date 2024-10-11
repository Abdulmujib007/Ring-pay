import { View, Text, ImageComponent, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

interface Props {
    text : string,
    svg: ReactNode
}

const EditCard = ({svg,text} : Props) => {
  return (
    <View style={{rowGap:hp(0.5),alignItems:'center',justifyContent:'center'}}>
        <View style={styles.container}>
            {svg}
        </View>
        <Text style={{fontSize:12,fontWeight:'semibold'}}>{text}</Text>
    </View>
  )
}

export default EditCard

const styles = StyleSheet.create({
  container: {
    width: wp(10.67),
    height: hp(5),
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent:"center",
    alignItems:'center'
    // alignItems: "center",
    // justifyContent: "center",
  },
});