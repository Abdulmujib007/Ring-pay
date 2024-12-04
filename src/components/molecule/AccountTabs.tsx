import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FullAccount from '../../screens/FullAccount'

const stack = createStackNavigator()


const AccountTabs = () => {

    const {Screen,Navigator} = stack

  return (
 <Navigator screenOptions={{headerShown:false}}>
    <Screen component={FullAccount} name='fullAccount' />
 </Navigator>
  )
}

export default AccountTabs