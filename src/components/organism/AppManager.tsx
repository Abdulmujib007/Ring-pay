import React, { ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "../../../store";
import { StatusBar } from "expo-status-bar";

export default function AppManager({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="black" />
        {children}
      </NavigationContainer>
    </Provider>
  );
}
