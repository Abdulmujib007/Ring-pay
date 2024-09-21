import { View, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootParams } from './utils/types'
import Onboarding from './screens/Onboarding'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import SignUp from './screens/SignUp'
import EmailVerification from './screens/EmailVerification'
import SetPin from './screens/SetPin'
import SetCurrency from './screens/SetCurrency'

const stack = createStackNavigator<RootParams>()
export default function AppRoutes() {
    const {Navigator ,Screen} = stack
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} />
        <Navigator screenOptions={{headerShown:false}} initialRouteName='onboarding'>
            <Screen name="onboarding" component={Onboarding}/>
            <Screen name='sighup' component={SignUp} />
            <Screen name='emailVerification' component={EmailVerification} />
            <Screen name='setpin' component={SetPin}  />
            <Screen name='setcurrency' component={SetCurrency} />
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