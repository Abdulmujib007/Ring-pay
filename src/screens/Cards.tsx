import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Cards = () => {
  return (
    <View style={styles.container}>
      <Text>Cards</Text>
    </View>
  )
}

export default Cards

const styles =StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'#fff'
  }
})