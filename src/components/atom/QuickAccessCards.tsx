import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'

const QuickAccessCards = ({text,imgSource}: {text: string, imgSource : ImageSourcePropType}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={imgSource} />
      </View>
      <Text style={{ fontSize: 16, fontWeight: "semibold", color: "#575757" }}>
        {text}
      </Text>
    </View>
  );
}

export default QuickAccessCards

const styles = StyleSheet.create({
  container: {
    height: hp(19.7),
    width: wp(37.33),
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    paddingVertical: hp(3.94),
    paddingLeft: wp(4.27),
    rowGap: hp(2.96),
  },
  imgContainer: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2.1),
    backgroundColor: "#fff",
    borderRadius: 50,
    width: wp(13.33),
    height: hp(6.16),
  },
});