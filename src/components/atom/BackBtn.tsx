import { View, Text, Pressable, StyleSheet } from 'react-native'
import BackSvg from './icons/BackSvg';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function BackBtn({navigation,text,columnGap}: {navigation : any,text? : string,columnGap ?: number}) {
  return (
    <View style={[styles.backLogo,{columnGap: columnGap ? wp(columnGap) : wp(36) }]}>
      <Pressable onPress={() => navigation.goBack()}>
        <BackSvg />
      </Pressable>
      <Text style={{fontWeight:'bold',fontSize:20}}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  backLogo: {
    paddingTop: hp(2),
    paddingLeft: wp(6.67),
    flexDirection:'row',
    columnGap:wp(36),
    alignItems:'center',
    // justifyContent:"center"
  },
});