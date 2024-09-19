import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function Onboarding({ navigation }: any) {
  // const { replace } = navigation;
      const handleSighup = () => {
        // replace("sighup");
        navigation.navigate('sighup')
  };
  return (
    <View>
      <Pressable onPress={handleSighup}>
        <Text>Create Account</Text>
      </Pressable>
    </View>
  );
}
