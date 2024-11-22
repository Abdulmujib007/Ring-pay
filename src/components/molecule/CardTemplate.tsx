import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import HideSvg from "../atom/icons/HideSvg";
import CopySvg from "../atom/icons/CopySvg";
import { CardData } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { cardToShow } from "../../utils/singleCardPageSlice";

interface PropParams {
    lastFourDigits:number;
    image : ImageSourcePropType;
    index : number;
    balance:number;
    expiryDate:string;
    cvv:number;
    cardName:string;
    navigation? :any,
    
}

const   CardTemplate = ({lastFourDigits, image,index,balance,cvv,expiryDate,cardName,navigation, } : PropParams ) => {

  
  return (
    // <Pressable  onPress={handlePress} >
      <ImageBackground
        style={styles.image}
        source={image}
        resizeMode={index === 0 ? 'contain' : 'cover'}
      >
        <View style={styles.content}>
          <Text style={{ fontWeight: "bold", fontSize: 14, color: "#D7D7D7" }}>
            Subscriptions
          </Text>
          <View
            style={{
              marginTop: hp(2.46),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: index === 0 ? wp(3.47) : wp(15.2),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 2,
              }}
            >
              <Text
                style={{
                  color: "#D7D7D7",
                  fontWeight: "semibold",
                  fontSize: 12,
                }}
              >
                Pin:
              </Text>
              <HideSvg />
            </View>
            <CopySvg />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 3,
              justifyContent: "space-between",
              paddingRight: index === 0 ? wp(3.47) : wp(15.2),
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 26,
                fontWeight: "bold",
              }}
            >
              ****
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 26,
                fontWeight: "bold",
              }}
            >
              ****
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 26,
                fontWeight: "bold",
              }}
            >
              ****
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 26,
                fontWeight: "bold",
              }}
            >
              {lastFourDigits}
            </Text>
          </View>
          <Text
            style={{
              color: "#D7D7D7",
              fontSize: 14,
              fontWeight: "bold",
              marginBottom: hp(2.46),
            }}
          >
            {cardName}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between",alignItems:'center' }}
          >
            <View>
              <Text style={{ color: "#fff", fontSize: 10 }}>Balance</Text>
              <Text
                style={{ color: "#fff", fontWeight: "bold", fontSize: 14 }}
              >
                ${balance}
              </Text>
            </View>
            <View>
              <Text style={{ color: "#D7D7D7", fontSize: 10 }}>Expiry</Text>
              <Text
                style={{ color: "#D7D7D7", fontWeight: "bold", fontSize: 12 }}
              >
                {expiryDate}
              </Text>
            </View>
            <View>
              <Text style={{ color: "#D7D7D7", fontSize: 10 }}>CCV</Text>
              <Text
                style={{ color: "#D7D7D7", fontWeight: "bold", fontSize: 12 }}
              >
                {cvv}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    // </Pressable>
  );
};

export default CardTemplate;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: hp(24.63),
  },
  content: {
    paddingHorizontal: wp(5.56),
    paddingVertical: hp(2.46),
    paddingTop: hp(3.2),
  },
});
