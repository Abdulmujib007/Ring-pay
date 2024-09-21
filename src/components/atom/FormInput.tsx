// import { TextInput,View,StyleSheet } from 'react-native'
import React, { ReactNode, useState } from "react";

import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface FormProps {
  placeholder: string;
  keyboardType?:
     "default"
    | "numeric"
    | "email-address"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "number-pad"
    | "phone-pad"
    | "name-phone-pad"
    | "decimal-pad"
    | "twitter"
    | "web-search"
    | "visible-password";
  onChangeText: any;
  secureTextEntry?: boolean;
  children?: ReactNode;
}

const FormInput = ({
  keyboardType = "default",
  onChangeText,
  placeholder,
  secureTextEntry = false,
  children,
}: FormProps) => {
  const [focusColor, setFocusColor] = useState(false);
  return (
    <View
      style={[
        styles.container,
        {
          borderWidth: focusColor === true ? 1 : 0,
          borderColor: focusColor === true ? "green" : "none",
        },
      ]}
    >
      <TextInput
        
        onFocus={() => setFocusColor(true)}
        onBlur={() => setFocusColor(false)}
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(2.03),
    paddingHorizontal: wp(4.26),
    backgroundColor: "#F5F5F5",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  textInput: {
    fontWeight: "semibold",
    fontSize: 14,
    color: "#7F7F7F",
    width: wp(77),
  },
});

export default FormInput;
