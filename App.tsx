import "./gesture-handler";

import React from "react";
import AppManager from "./src/components/organism/AppManager";
import AppRoutes from "./src/AppRoutes";

export default function App() {
  return (
    <AppManager>
      <AppRoutes />
    </AppManager>
  );
}
