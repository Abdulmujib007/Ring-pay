import React, { ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { persistor, store } from "../../../store";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import Toast from "react-native-toast-message";
import { PersistGate } from "redux-persist/integration/react";

export default function AppManager({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar
            backgroundColor={Platform.OS === "ios" ? "black" : "white"}
          />
          {children}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
