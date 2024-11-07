// import { useMMKV, useMMKVString } from 'react-native-mmkv';
import { PinCode, PinCodeT } from "@anhnch/react-native-pincode";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const PinInput2 = ({pinType} : {pinType:'Enter' | 'Set'}) => {
  //   const mmkv = useMMKV();
  const [pin, setPin] = useState("");
  const [pinMode, setPinMode] = useState(pinType === 'Enter' ? PinCodeT.Modes.Enter : PinCodeT.Modes.Set);
  const [pinVisible, setPinVisible] = useState(true);

  const Set: PinCodeT.EnterSetStyles = {
    header: {
      display: "none",
      // backgroundColor:'green'
    },
    // pin:{
    //   backgroundColor : 'green'
    // },      {/* <Text>EnterPin</Text> */}

    // enteredPin : {
    //     height: 70
    // },
    // errorText: {
    //   color: 'red'
    // // },
    pin: {
      backgroundColor: "#D7D7D7",
      width: wp(3.73),
      height: hp(1.72),
      borderRadius: 100,
    },
    enteredPin: {
      backgroundColor: "#6DCB89",
      width: wp(3.73),
      height: hp(1.72),
      borderRadius: 100,
    },
    footerText: { color: "#000" },
    errorText: { color: "#CA0F3A" },
    title: {
      color: "red",
    },
    content: {
      margin: 0,
      padding: 0,
    },

    pinContainer: {
      margin: 0,
      padding: 0,
      height: "auto",
      // height:'auto',
      // backgroundColor: "red",
    },
    buttonContainer: {
      padding: 0,
      margin: 0,
      marginTop: hp(6.4),
      // backgroundColor: "yellow",
      height: "80%",
      width: "100%",
    },
    button: {
      width: wp(21.33),
      height: hp(10),
      borderRadius: 100,
      backgroundColor: "#F5F5F5",
    },
    buttonRow: {
      padding: 0,
      margin: 0,
      // backgroundColor : 'red',
      // columnGap :0,
      // rowGap:      {/* <Text>EnterPin</Text> */}
    },
  };
  const customStyles: PinCodeT.PinCodeStyles = {
    main: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 99,
      backgroundColor: "white",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: 0,
      margin: 0,
      // height:hp(100)
      // width : wp('100%')
      // flexGrow: 1
      // columnGap: 0,
      // rowGap : 0
    },
    enter: {
      ...Set,

      // header:{
      //   display:'none',
      //   padding: 0
      // },
      // title: {
      //   // display: 'none',      {/* <Text>EnterPin</Text> */}

      // },      {/* <Text>EnterPin</Text> */}

      // subTitle:{
      //   display: 'none',
      // },
      // pin: { backgroundColor: "# " },
      // enteredPin: { backgroundColor: "#4DC2C1" },
      // footerText: { color: "#000" },
      // errorText: { color: "#CA0F3A",
      // },
    },
  };

  return (
    <View style={{ height: "70%" }}>
      <PinCode
        textOptions={{
          set: { cancel: undefined, repeat: "Pls enter the pin again" },
          enter:{title:"Enter your transaction pin"}
        }}
        options={{
          maxAttempt: 4,
          allowReset: false,
          backSpace: (
            <FontAwesome6 name="delete-left" size={24} color="#7F7F7F" />
          ),
        }}
        pin={pin}
        mode={pinMode}
        visible={pinVisible}
        styles={customStyles}
        onSet={(newPin) => {
          setPin(newPin);
          // setPinVisible();
        }}
        onSetCancel={() => setPinVisible(true)}
        onReset={() => setPin("")}
        onEnter={() => setPinVisible(true)}
      />
      {/* <AppButton text="Set Pin"/> */}
    </View>
  );
};
export default PinInput2;
