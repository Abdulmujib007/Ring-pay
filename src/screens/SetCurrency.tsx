import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BackBtn from '../components/atom/BackBtn'

export default function SetCurrency({navigation } : any) {
  return (
    <View style={styles.container}>
        <BackBtn navigation={navigation} />
    </View>
  )
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:'#fff'
    }
})