import { View, Text, StyleSheet, Image, Pressable, Modal } from "react-native";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardTemplate from "../components/molecule/CardTemplate";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import BackBtn from "../components/atom/BackBtn";
import DetailsSvg from "../components/atom/icons/DetailsSvg";
import EditCard from "../components/atom/EditCard";
import FreezeSvg from "../components/atom/icons/FreezeSvg";
import MoreSvg from "../components/atom/icons/MoreSvg";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import TransactionSvg from "../components/atom/icons/TransactionSvg";
import { ScrollView } from "react-native-gesture-handler";
import { singleCardTransactionData } from "../utils/constants";
import Transaction from "../components/molecule/Transaction";
import BottomSheet from "@gorhom/bottom-sheet";
import CardDetails from "../components/atom/CardDetails";
// import { G } from "react-native-svg";

const SIngleCardPage = ({ navigation }: any) => {
  const cardData = useSelector((state: any) => state.cardToShow);
  const [showMore, setShowMore] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleCardDetails = () => {
    bottomSheetRef.current?.expand();
  };

  const handleCardDelete = () => {
    setModalVisibility(false);
    navigation.navigate("card");
  };

  return (
    <View style={styles.container} key={`container${cardData.id}`}>
      <BackBtn text="Title" navigation={navigation} />
      <View style={styles.card}>
        <CardTemplate
          balance={cardData.balance}
          cardName={cardData.cardName}
          cvv={cardData.cvv}
          expiryDate={cardData.expiryDate}
          image={cardData.image}
          lastFourDigits={cardData.lastFourDigits}
          index={cardData.id}
          key={cardData.id}
        />
        <View key={`view${cardData.id}`} style={{ alignItems: "center" }}>
          <Image
            key={`img${cardData.id}`}
            source={require("../assets/Ellipse 9.png")}
          />
        </View>
      </View>
      <View style={styles.editCard}>
        <Pressable style={{ width: wp(15) }} onPress={handleCardDetails}>
          <EditCard svg={<DetailsSvg />} text="Details" />
        </Pressable>
        <Pressable
          style={{ width: wp(15) }}
          onPress={() => navigation.navigate("fundCard")}
        >
          <EditCard
            text="Add Fund"
            svg={<FontAwesome6 name="plus" size={18} color="black" />}
          />
        </Pressable>
        <EditCard text="Freeze" svg={<FreezeSvg />} />
        <View style={{ height: hp(6.5), width: wp(21) }}>
          <Pressable onPress={() => setShowMore((prevValue) => !prevValue)}>
            <EditCard text="More" svg={<MoreSvg />} />
          </Pressable>
          {showMore && (
            <View
              style={{
                rowGap: hp(1),
                alignItems: "center",
                paddingTop: 5,
                width: "auto",
              }}
            >
              <Text
                onPress={() => setModalVisibility((prev) => !prev)}
                style={{ fontSize: 12 }}
              >
                Delete Card
              </Text>
              <Text onPress={() => navigation.navigate('withdrawal')} style={{ fontSize: 12 }}>Withdraw Fund</Text>
              <Text onPress={() => navigation.navigate('changePin')} style={{ fontSize: 12 }}>Change Pin</Text>
              
            </View>
          )}
        </View>
      </View>
      <View style={styles.transactionView}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Transactions</Text>
        <TransactionSvg />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={{ rowGap: hp(2) }}>
          {singleCardTransactionData.map((item, ind) => (
            <>
              <Transaction
                amount={item.amount}
                amountColor={item.amountColor}
                image={item.image}
                method={item.method}
                time={item.time}
                key={ind}
              />
            </>
          ))}
        </View>
      </ScrollView>
      <BottomSheet
        index={0}
        snapPoints={["1", "56%"]}
        enablePanDownToClose
        ref={bottomSheetRef}
        style={{
          shadowColor: "#a4a4a4",
          shadowOffset: { height: 4, width: 0 },
          shadowRadius: 5,
          shadowOpacity: 2,
        }}
        handleIndicatorStyle={{ width: 73, backgroundColor: "#D7D7D7" }}
      >
        <View
          style={{
            marginTop: hp(1),
            marginHorizontal: wp(5.33),
            rowGap: hp(4),
          }}
        >
          <CardDetails header="Card Name" text="John Doe" />
          <CardDetails header="Number" text="5678 8987 7654 8987" />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CardDetails header="CVV" text="098" width={37.33} />
            <CardDetails header="Expiry" text="07/27" width={37.33} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CardDetails header="Pin" text="----" width={37.33} />
            <CardDetails header="Zip Code" text="101212" width={37.33} />
          </View>
          <CardDetails
            header="Billing Address"
            text="25 philips street, new jersey"
          />
        </View>
      </BottomSheet>
      <Modal visible={modalVisibility}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F9F9F9",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              paddingHorizontal: wp(5.33),
              paddingVertical: hp(2.46),
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 40,
            }}
          >
            <Text
              style={{
                fontSize: 26,
                fontWeight: "bold",
                color: "#2D2D2D",
                marginBottom: hp(1),
              }}
            >
              Confirm Delete
            </Text>
            <Text
              style={{
                fontSize: 16,
                width: wp(66),
                textAlign: "center",
                color: "#7F7F7F",
              }}
            >
              Are you sure you want to Delete card?
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "80%",
                paddingTop: hp(2.46),
              }}
            >
              <Pressable
                style={{
                  paddingHorizontal: wp(9),
                  paddingVertical: hp(1.97),
                  backgroundColor: "#41B63E",
                  borderRadius: 50,
                }}
                onPress={() => setModalVisibility(false)}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "semibold",
                    color: "#fff",
                  }}
                >
                  Cancel
                </Text>
              </Pressable>
              <Pressable
                style={{
                  paddingHorizontal: wp(12.5),
                  paddingVertical: hp(1.97),
                  borderColor: "#3BA638",
                  borderWidth: 1,
                  borderRadius: 50,
                }}
                onPress={handleCardDelete}
              >
                <Text style={{ color: "#3BA638",fontSize:18,fontWeight:'semibold' }}>Yes</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
  card: {
    marginTop: hp(1.97),
    paddingHorizontal: wp(4.27),
    rowGap: hp(2.46),
  },
  editCard: {
    marginTop: hp(2.46),
    columnGap: wp(6.4),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#D9D9D9",
    shadowOffset: { height: 10, width: 30 },
    shadowOpacity: 1,
    shadowRadius: 15,
  },
  transactionView: {
    marginTop: hp(7),
    marginHorizontal: wp(4.26),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scrollView: {
    paddingTop: hp(3),
    paddingHorizontal: wp(4.26),
    display: "flex",
    rowGap: hp(2),
  },
});
