import React, { ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "../../../store";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import Toast from "react-native-toast-message";

export default function AppManager({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor= {Platform.OS === 'ios' ? 'black' : 'white' } />
        {children}
      </NavigationContainer>
      {/* <Toast/> */}
    </Provider>
  );
}
