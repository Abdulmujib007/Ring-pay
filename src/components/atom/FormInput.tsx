// import { TextInput,View,StyleSheet } from 'react-native'
import React, { Children, ReactNode, useState } from "react";

import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import PasswordShowSvg from "./icons/PasswordShowSvg";
import PasswordHideSvg from "./icons/PasswordHideSvg";

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
  type? : 'password';
  children?: ReactNode
}

const FormInput = ({
  keyboardType = "default",
  onChangeText,
  placeholder,
  type,
  children 
}: FormProps) => {
  const [focusColor, setFocusColor] = useState(false);
  const [passwordShow, setPasswordShow] = useState(true);

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
        secureTextEntry={type === 'password' ? passwordShow : false}
      />
      {type === "password" && (
        <View>
          {passwordShow && (
            <PasswordShowSvg onPress={() => setPasswordShow(prev => !prev)} />
          )}
          {!passwordShow && (
            <PasswordHideSvg onPress={() => setPasswordShow(prev => !prev)} />
          )}
        </View>
        
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(2.03),
    paddingHorizontal: wp(4.26),
    backgroundColor: "#F5F5F5",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    fontWeight: "semibold",
    fontSize: 14,
    color: "#7F7F7F",
    width: wp(77),
  },
});

export default FormInput;
