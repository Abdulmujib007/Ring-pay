import { View, Text, Modal, StyleSheet, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggle1 } from "../../utils/modalSlice";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import GoogleSvg from "../atom/icons/GoogleSvg";
import AvatarSvg from "../atom/icons/AvatarSvg";
import UseAnotherAccountSvg from "../atom/icons/UseAnotherAccountSvg";
// import AvatarSvg from '../atom/icons/UseAnotherAccountSvg';

export default function GoogleSignUpModal() {
  const dispatch = useDispatch();
  interface Modal {
    modalVisibility: {
      toggle1: boolean;
      toggle2: boolean;
    };
  }

  // const handleModalHide = () => {
  //   if(toggle == 'toggle1'){
  //       dispatch(toggle1(false))
  //   } else{
  //     dispatch(toggle2(false))
  //   }
  // }
  const modalVisibility = useSelector((state: Modal) => state.modalVisibility);

  return (
    // <View style={{}}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisibility.toggle1}
    >
      <View style={styles.modalView}>
        <View style={styles.withGoogle}>
          <GoogleSvg />
          <Text style={{ fontSize: 18 }}>Sign In With Google</Text>
        </View>
        <Text style={styles.chooseAccount}>Choose an account</Text>
        <Text style={styles.continueText}>
          to continue to
          <Text style={{ color: "#D23431" }}> Nerdyeye</Text>
        </Text>

        <View style={{ paddingHorizontal: wp(5.4) }}>
          <Pressable style={styles.avatarArea}>
            <AvatarSvg />
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "#404040",
                  marginBottom: 3,
                }}
              >
                John Doe
              </Text>
              <Text
                style={{ fontSize: 12, fontWeight: "bold", color: "#7F7F7F" }}
              >
                johndoe@gmail.com
              </Text>
            </View>
          </Pressable>
          <Pressable style={styles.avatarArea}>
            <AvatarSvg />
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "#404040",
                  marginBottom: 3,
                }}
              >
                John Doe
              </Text>
              <Text
                style={{ fontSize: 12, fontWeight: "bold", color: "#7F7F7F" }}
              >
                johndoe@gmail.com
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => dispatch(toggle1(false))} style={styles.anotherAccount}>
            <UseAnotherAccountSvg/>
            <Text style={{fontWeight:'semibold', fontSize: 20}} > Use another account</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalView: {
    // flex: 1,
    backgroundColor: "white",
    shadowColor:'#a4a4a4',
    shadowOffset:{height:0,width:0},
    shadowRadius:3,
    shadowOpacity:0.5,
    // paddingTop: 40,
    height: hp(47.4),
    width: wp(85.6),
    marginTop: "50%",
    marginLeft: "8%",
    borderRadius: 30,
    // alignItems: "center",
    // justifyContent: "center",
  },
  withGoogle: {
    // marginHorizontal: wp(4.27),
    flexDirection: "row",
    paddingVertical: hp(2.6),
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#D7D7D7",
    borderBottomWidth: 1,
    columnGap: wp(3),
    // columnGap: 10,
    // // borderWidth: 1,
    // // borderColor: "#2D2D2D",
    // // borderRadius: 50,
    // paddingVertical: hp(2),
  },
  chooseAccount: {
    textAlign: "center",
    marginTop: hp(2.46),
    marginBottom: hp(1),
    fontSize: 20,
    fontWeight: "bold",
  },
  continueText: {
    textAlign: "center",
    color: "#666666",
    fontSize: 14,
  },
  avatarArea: {
    flexDirection: "row",
    columnGap: wp(5.33),
    paddingVertical: hp(2.5),
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
    alignItems:'center'
  },
  anotherAccount : {
    paddingTop : hp(3),
    flexDirection:'row',
    alignItems:'center',
    columnGap : wp(6.2)
  }
});
