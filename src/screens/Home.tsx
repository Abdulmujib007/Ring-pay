import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function Home() {
  return (
    <View  style={styles.container} >
      <Text>Home</Text>
    </View>
  )
}
const styles  = StyleSheet.create({
    container : {
        backgroundColor:'#fff',
        flex : 1,
        paddingTop: hp(5.4)
    }
})