import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FullAccount from '../../screens/FullAccount'
import AccountsDetails from '../../screens/AccountsDetails'

const stack = createStackNavigator()


const AccountTabs = () => {

    const {Screen,Navigator} = stack

  return (
 <Navigator screenOptions={{headerShown:false}}>
    <Screen component={FullAccount} name='fullAccount' />
    <Screen component={AccountsDetails} name='accDetails' />
 </Navigator>
  )
}

export default AccountTabs