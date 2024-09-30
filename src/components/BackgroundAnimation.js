import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BackgroundAnimation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>

      </View>
      <View style={styles.column}>

      </View>
      <View style={styles.column}>

      </View>
    </View>
  )
}

export default BackgroundAnimation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: wp('100%'),
        height: hp('100%'),
    },
    column: {
        width: wp('30%'),
        height: hp('100%'),
        backgroundColor: 'red'
    }
})