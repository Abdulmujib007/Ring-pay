import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CardTemplate from "../components/molecule/CardTemplate";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import BackBtn from "../components/atom/BackBtn";

const SIngleCardPage = ({ navigation }: any) => {
  const cardData = useSelector((state: any) => state.cardToShow);
  return (
    <View style={styles.container}>
      <BackBtn text="Title" navigation={navigation} />
      <View style={{marginTop:hp(1.97),paddingHorizontal:wp(4.27)}} >
        <CardTemplate
          balance={cardData.balance}
          cardName={cardData.cardName}
          cvv={cardData.cvv}
          expiryDate={cardData.expiryDate}
          image={cardData.image}
          lastFourDigits={cardData.lastFourDigits}
          index={cardData.id}
        />
      </View>
      <View>
        
      </View>
    </View>
  );
};

export default SIngleCardPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: hp(5.4),
  },
});
