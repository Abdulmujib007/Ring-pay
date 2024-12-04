import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'
import NavBar from '../components/molecule/NavBar'

const FullAccount = () => {
  return (
    <View style ={styles.container}>
        <NavBar svgColor='Dark'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        paddingTop:hp(5.4),
        flex: 1,
        backgroundColor:'#fff'
    }
})

export default FullAccount