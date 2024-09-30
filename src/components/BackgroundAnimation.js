import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BackgroundAnimation = () => {
  return (
    <View style={styles.container}>
      <Text>BackgroundAnimation</Text>
    </View>
  )
}

export default BackgroundAnimation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: wp('100%'),
        height: hp('100%'),

    }
})