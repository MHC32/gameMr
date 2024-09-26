import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'


const IndicatorPage = ({actived}) => {
  return (
    <View style={{...styles.indicator, backgroundColor: actived ? "#08AD2C": "#929292"}}>
    </View>
  )
}

export default IndicatorPage

const styles = StyleSheet.create({
    indicator: {
        width: wp('15%'),
        height: hp('0.3 %'),
    }
})