import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'
import NavBar from '../components/molecule/NavBar'

const Cards = () => {
  return (
    <View style={styles.container}>
      <NavBar svgColor='Dark'/>
    </View>
  )
}

export default Cards

const styles =StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'#fff',
    paddingTop:hp(5.4)
  }
})