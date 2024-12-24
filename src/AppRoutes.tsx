import { View, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootParams } from './utils/types'
import Onboarding from './screens/Onboarding'
import SignUp from './screens/SignUp'
import EmailVerification from './screens/EmailVerification'
import SetPin from './screens/SetPin'
import SetCurrency from './screens/SetCurrency'
import Login from './screens/Login'
import ForgotPassword from './screens/ForgotPassword'
import DrawerTabs from './components/molecule/DrawerTabs'
import { useSelector } from 'react-redux'
// import FundCard from './screens/FundCard'

const stack = createStackNavigator<RootParams>()
export default function AppRoutes() {
    const {Navigator ,Screen} = stack
    const appReducer : any = useSelector((state : any ) => state.persists)
    console.log(appReducer)
  return (
    <View style={styles.container}>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="onboarding"
      >
     {
      !appReducer.onBoarding && (
           <Screen name="onboarding" component={Onboarding} />
      )
     }
        <Screen name="sighup" component={SignUp} />
        <Screen name="emailVerification" component={EmailVerification} />
        <Screen name="setpin" component={SetPin} />
        <Screen name="setcurrency" component={SetCurrency} />
        <Screen name="login" component={Login} />
        <Screen name="forgotPassword" component={ForgotPassword} />
        <Screen name="drawerTab" component={DrawerTabs} />
      </Navigator>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // paddingTop: hp(5.4),
  },
});