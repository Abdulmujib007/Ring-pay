import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerParams } from "../../utils/types";
const Drawer  = createDrawerNavigator<DrawerParams>()

import React from 'react'
import Expenses from "../../screens/Expenses";
import Payment from "../../screens/Payment";
import Payroll from "../../screens/Payroll";
import Profile from "../../screens/Profile";
import Settings from "../../screens/Settings";
import BottomTabs from "./BottomTabs";
import DrawerContent from "../organism/DrawerContent";

const DrawerTabs = () => {
    const {Navigator,Screen} = Drawer 
  return (
      <Navigator initialRouteName="bottomTab"
        screenOptions={{headerShown:false,drawerStyle:{width:'80%'}}}
        drawerContent={(props) => <DrawerContent {...props} /> }
      >
            <Screen  name="bottomTab" component={BottomTabs} />
            <Screen name="Expenses" component={Expenses}  />
            <Screen  name="Payment" component={Payment} />
            <Screen name="Payroll" component={Payroll}  />
            <Screen name="Profile" component={Profile} />
            <Screen name="Settings" component={Settings} />
        </Navigator>
  )
}

export default DrawerTabs