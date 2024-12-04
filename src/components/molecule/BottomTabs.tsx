import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import { BottomTabParams } from "../../utils/types";
import Transactions from "../../screens/Transactions";
import CardTabs from "./CardTabs";
import AccountTabs from "./AccountTabs";

const Tab = createBottomTabNavigator<BottomTabParams>();
const BottomTabs = () => {
  const { Navigator, Screen } = Tab;
  return (
    <Navigator

      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#41B63E",
        tabBarInactiveTintColor: "#707070",
        tabBarStyle:{borderTopWidth:0,paddingHorizontal: 0},
        
      }}
    >
      {/* <Screen name="drawerTab" component={DrawerTabs}  /> */}
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
          //   tabBarActiveTintColor=''
        }}
      />
      <Screen
        name="Cards"
        component={CardTabs}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="card" size={24} color={color} />;
          },
        }}
      />
      <Screen
        name="Accounts"
        component={AccountTabs}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="bank" size={24} color={color} />
            );
          },
        }}
      />
     <Screen name="Transactions" component={Transactions}
      options={{
        tabBarIcon: ({color}) => {
          return(
            <MaterialIcons name="swap-vert" size={24} color={color} /> 

          )
        }
      }}
     /> 
    </Navigator>
  );
};

export default BottomTabs;
