import { View, Text } from 'react-native'
import React, { useState } from 'react'
import FormInput from '../atom/FormInput';
import PasswordHideSvg from '../atom/icons/PasswordHideSvg';
import PasswordShowSvg from '../atom/icons/PasswordShowSvg';

export default function PasswordFormInput({password} : {password :(e : any) => void}) {
  const [passwordShow, setPasswordShow] = useState(true);

  return (
    <FormInput
      placeholder="Password"
      secureTextEntry={passwordShow}
      onChangeText={password}
    >
      {passwordShow && (
        <PasswordShowSvg onPress={() => setPasswordShow(false)} />
      )}
      {!passwordShow && (
        <PasswordHideSvg onPress={() => setPasswordShow(true)} />
      )}
    </FormInput>
  );
}