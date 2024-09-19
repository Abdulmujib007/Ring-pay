import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function KeyboardAvoidView({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
      scrollToOverflowEnabled={false}
      extraScrollHeight={0}
      extraHeight={100}
      enableResetScrollToCoords={false}
    >
      {children}
    </KeyboardAwareScrollView>
  );
}
