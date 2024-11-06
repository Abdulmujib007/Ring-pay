import "./gesture-handler";

import React from "react";
import AppManager from "./src/components/organism/AppManager";
import AppRoutes from "./src/AppRoutes";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <AppManager>
      <AppRoutes />
      <Toast/>
    </AppManager>
  );
}
