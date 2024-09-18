import { View, StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootParams } from './utils/types'
import Onboarding from './screens/Onboarding'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

const stack = createStackNavigator<RootParams>()
export default function AppRoutes() {
    const {Navigator ,Screen} = stack
  return (
    <View style={styles.container}>
        <Navigator screenOptions={{headerShown:false}} initialRouteName='onboarding'>
            <Screen name="onboarding" component={Onboarding}/>
        </Navigator>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: hp(5.4),
  },
});