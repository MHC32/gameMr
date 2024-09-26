import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import useCustomFonts from '../../utils/fonts';
import IndicatorPage from '../components/IndicatorPage';


const OnBoarding1 = () => {
  const { loaded } = useCustomFonts();

  if (!loaded) {
    return (
      <View style={styles.container}>
        <Text>Loading Fonts...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
       <View style={styles.containerItems}>
          <Text style={styles.text1}>Shop Original Xbox Accessories</Text>
          <View style={styles.containerText2}>
            <Text style={styles.text2} >Authorized Xbox Dealer.</Text>
            <Text style={styles.text2}>Accessories Are Backed By</Text>
            <Text style={styles.text2}>Warranty</Text>
          </View>
          <Image source={require('../../assets/unsplash_UCFDB6O48d0.png')}/>
          <View style={styles.containerIndicatorPage}>
            <IndicatorPage actived={true}/>
            <IndicatorPage/>
          </View>
       </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'black',
        width: wp('100%'),
        height: hp('100%')
    },
    containerItems: {
      width: wp('100%'),
      height: hp('85%'),
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    text1: {
      color: '#FFFFFF',
      fontFamily: 'RopaSansRegular',
      fontSize: 42,
      textAlign:'center',
    },
    containerText2: {
      width: wp('100%'),
      justifyContent: 'center',
      alignItems: 'center',
    },
    text2: {
      color: '#B5B5B5',
      fontFamily: 'RopaSansRegular',
      fontSize: 21,
      textAlign: 'center'
    },
    containerIndicatorPage: {
      width: wp('35%'),
      height: hp('3%'),
      flexDirection:'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      alignSelf: 'flex-start',
    },
})
export default OnBoarding1