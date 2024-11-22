import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import NavBar from "../components/molecule/NavBar";
// import BritainFlagSvg from '../components/atom/icons/BritainFlagSvg'
import ArrowDownSvg from "../components/atom/icons/ArrowDownSvg";
import CardTemplate from "../components/molecule/CardTemplate";
import { ScrollView } from "react-native-gesture-handler";
import { CardData } from "../utils/constants";
import AddSvg from "../components/atom/icons/AddSvg";
import { useDispatch } from "react-redux";
import { cardToShow } from "../utils/singleCardPageSlice";

const Cards = ({ navigation }: any) => {

    const dispatch = useDispatch();
    const handlePress = (id:number) => {
      dispatch(cardToShow(CardData[id]));
      navigation.navigate("singlecard");
    };

  return (
    <View style={styles.container}>
      <NavBar svgColor="Dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerText}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 26 }}>All Cards</Text>
            <Text style={{ fontSize: 14, color: "#666666" }}>
              Manage all your virtual cards
            </Text>
          </View>
          <View style={styles.flagView}>
            {/* <BritainFlagSvg /> */}
            <Image source={require("../assets/flag.png")} />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                paddingRight: 3,
                color: "#404040",
              }}
            >
              GBP
            </Text>
            <ArrowDownSvg />
          </View>
        </View>
        <View style={styles.cardsList}>
          {CardData.map(
            (
              { balance, cardName, cvv, expiryDate, image, lastFourDigits,id },
              index
            ) => (
              <Pressable onPress={() =>handlePress(id)}>
                <CardTemplate
                  key={index}
                  balance={balance}
                  cardName={cardName}
                  cvv={cvv}
                  expiryDate={expiryDate}
                  image={image}
                  lastFourDigits={lastFourDigits}
                  index={index}
                  navigation={navigation}
                />
              </Pressable>
            )
          )}

        </View>
      </ScrollView>
      <Pressable
        onPress={() => navigation.navigate("addCard")}
        style={styles.addNew}
      >
        <AddSvg />
        <Text style={{ color: "#fff", fontWeight: "semibold", fontSize: 16 }}>
          New Card
        </Text>
      </Pressable>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: hp(5.4),
  },
  headerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(4.27),
    paddingVertical: hp(2.71),
  },
  flagView: {
    flexDirection: "row",
    paddingLeft: wp(2.13),
    paddingRight: wp(4.53),
    paddingVertical: hp(1),
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 50,
    columnGap: 3,
  },
  cardsList: {
    paddingHorizontal: wp(4.27),
    paddingBottom: hp(2.46),
    rowGap: hp(2.46),
  },
  addNew: {
    position: "absolute",
    top: "90%",
    right: "5%",
    backgroundColor: "#25B14F",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: wp(41.33),
    height: hp(6),
    borderRadius: 50,
    columnGap: wp(2.66),
  },
});
