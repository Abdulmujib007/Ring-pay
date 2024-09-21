import { View, Text, Pressable, StyleSheet } from 'react-native'
import BackSvg from './icons/BackSvg';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function BackBtn({navigation}: {navigation : any}) {
  return (
    <View style={styles.backLogo}>
      <Pressable onPress={() => navigation.goBack()}>
        <BackSvg />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  backLogo: {
    paddingTop: hp(2),
    paddingLeft: wp(6.67),
  },
});