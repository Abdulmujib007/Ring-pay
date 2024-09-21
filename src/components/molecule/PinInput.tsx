import { View, Text,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { PinCode, PinCodeT } from '@anhnch/react-native-pincode';

export default function PinInput() {

    const [pin,setPin] = useState('')
     const [pinMode, setPinMode] = useState<any>(PinCodeT.Modes.Enter);
     const [pinVisible, setPinVisible] = useState(true);
     const [viewMode, setViewMode] = useState<any>("");
  return (
    <View>
      <PinCode
        pin={pin}
        mode={pinMode}
        visible={pinVisible}
        // onSet={(newPin) => {
        //   setAuthData((currentData: any) => ({ ...currentData, pin: newPin }));
        //   setPinVisible(false);
        // }}
        onSet={(newPin) => {
          setPin(newPin);
          setPinVisible(false);
        }}
        // onModeChanged={(lastmode, newMode) => {
        //   console.log({ lastmode, newMode });
        //   setViewMode(newMode);
        //   setPinMode(newMode);
        // }}
        onSetCancel={() => {
          setPinVisible(false);
        }}
        // onReset={async () => {
        //   // setPin("");
        //   if (isLoginType) {
        //     await deleteDataFromStore();
        //     return;
        //   }
        //   console.log("clicked");
        //   clearAuth();
        // }}
        // onEnter={() => {
        //   if (isLoginType) {
        //     onSuccess?.();
        //     return;
        //   }
        //   setPinVisible(false);
        //   setShowPinCode(false);
        // }}
        styles={{
          main: {
            ...StyleSheet.absoluteFillObject,
            zIndex: 99,
            backgroundColor: "red",
          },
        }}
        // textOptions={customTexts}
        options={{
          maxAttempt: 5,
          // backSpace: <BackSpaceIcon />,
          // lockIcon: (
          //   <RenderVectorIcon type="ant" icon="lock" size={26} color="black" />
          // ),
        }}
        onReset={() => setPin('')}
        onEnter={() => setPinVisible(false)}
      />
    </View>
  );
}