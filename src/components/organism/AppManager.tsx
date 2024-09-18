import { View, Text } from "react-native";
import React, {  ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";

export default function AppManager({ children }: { children: ReactNode }) {
  return <NavigationContainer>{children}</NavigationContainer>;
}
