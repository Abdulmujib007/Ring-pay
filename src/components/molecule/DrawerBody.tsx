import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { ReactNode } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

interface DrawerBodyProp {
  image: ReactNode;
  navigation : any;
  navigateTo : 'Expenses'| 'Payment' | 'Payroll' | 'Profile' | 'Settings'
}

const DrawerBody = ({image,navigation,navigateTo} : DrawerBodyProp) => {
  return (
    <Pressable
      onPress={() => navigation.navigate(navigateTo)  } 
     style={styles.container}>
        {image}
        <Text style={{fontWeight:'semibold',fontSize:16}} >{navigateTo}</Text>
    </Pressable>
  )
}

export default DrawerBody

const styles = StyleSheet.create({
  container : {
    paddingVertical:hp(1.9),
    paddingLeft:wp(5.33),
    flexDirection:'row',
    columnGap:wp(5.33),
    alignItems:'center'
  }
})