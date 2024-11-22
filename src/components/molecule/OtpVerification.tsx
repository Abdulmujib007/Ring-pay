import React, { useState } from "react";
import { Text, StyleSheet, Platform, View } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { TextInput } from "react-native-gesture-handler";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    // padding: 20,
    // paddingHorizontal: wp(4.8),
    paddingTop: hp(2.46),
  },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 0 },
  cell: {
    backgroundColor: "#F9F9F9",
    width: wp(10.67),
    height : hp(5),
    borderWidth: 1,
    borderColor: "#F9F9F9",
    borderRadius: 10,
  },
  focusCell: {
    borderColor: "#41B63E",
  },
  text: {
    lineHeight: 38,
    fontSize: 18,
    textAlign: "center",
    width: '100%',
    height: '100%',
  },
});


const OtpVerification = ({count}:{count : 4 | 6}) => {

  const CELL_COUNT = count;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        InputComponent={TextInput}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.OS === "android" ? "sms-otp" : "one-time-code"}
        testID="my-code-input"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            <Text
             style={styles.text}
            >{symbol || (isFocused ? <Cursor /> : null)}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default OtpVerification;
