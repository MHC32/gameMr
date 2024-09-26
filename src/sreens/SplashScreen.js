import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  Easing,
} from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { scale } from 'react-native-size-matters';
import useCustomFonts from '../../utils/fonts';

const SplashScreen = ({navigation}) => {
  const width = Dimensions.get('window').width;
  const { loaded } = useCustomFonts();
  const translateY = useSharedValue(100);
  const circleTranslateX = useSharedValue(0);
  const circleScale = useSharedValue(1);
  const circleOpacity = useSharedValue(1); 
  
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  
  const animatedCircle = useAnimatedStyle(() => ({
    opacity: circleOpacity.value,
    transform: [
      { translateX: circleTranslateX.value },
      { scale: circleScale.value }, 
    ],
  }));
  
  useEffect(() => {
    if (loaded) {
      translateY.value = withTiming(0, { duration: 500 });

      circleTranslateX.value = withSequence(
        withTiming(width / 3, { duration: 500, easing: Easing.bezier(0.39, 0.49, 0.25, 0.42), }),
        withTiming(0, { duration: 500, easing: Easing.bezier(0.39, 0.49, 0.25, 0.42), }),
        withTiming(-width / 3, { duration: 500, easing: Easing.bezier(0.39, 0.49, 0.25, 0.42), }),
        withTiming(width / 3, { duration: 500, easing: Easing.bezier(0.39, 0.49, 0.25, 0.42), })
      );
  
 
      circleScale.value = withSequence(
        withTiming(1, { duration: 500, easing: Easing.bezier(0.39, 0.49, 0.25, 0.42), }), 
        withTiming(1.2, { duration: 500, easing: Easing.bezier(0.39, 0.49, 0.25, 0.42), }), 
        withTiming(1.2, { duration: 500, easing: Easing.bezier(0.39, 0.49, 0.25, 0.42), }),
        withTiming(0.5, { duration: 500, easing: Easing.bezier(0.39, 0.49, 0.25, 0.42), }),
      );

      circleOpacity.value = withSequence(
        withTiming(1, { duration: 300 }), 
        withTiming(1, { duration: 300 }),
        withTiming(0.8, { duration: 1200 }), 
        withTiming(0, { duration: 100 }) 
      );
    }
  }, [loaded]);

  if (!loaded) {
    return (
      <View style={styles.container}>
        <Text>Loading Fonts...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerEnd}>
        <Animated.View style={[styles.containerLogo, animatedStyle]}>
          <Text style={styles.logo}>gamr</Text>
          <Animated.View style={[styles.circle, animatedCircle]} />
        </Animated.View>

        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Onboarding1')}>
          <Image source={require("../../assets/icons/Icon.png")}style={styles.icon} />
        </TouchableOpacity>

        <Animated.Image source={require('../../assets/unsplash_49hqFrGtL9Y.png')} style={[animatedStyle]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: 'flex-end'
  },
  containerEnd: {
    width: wp('100%'),
    height: hp('79%'),
  },
  containerLogo: {
    width: wp('100%'),
    height: hp('17%'),
    alignItems: 'center',
    position: "relative",
    marginBottom: wp('10%')
  },
  logo: {
    color: "white",
    fontSize: scale(94),
    fontFamily: 'UrbanistExtraBold',
    paddingLeft: wp('12%'),
    position: 'absolute',
    zIndex: 1.4,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#08AD2C',
    position: "absolute",
    top: wp('12%'),
    zIndex: 1.5,
  },
  button: {
    width: 89,
    height: 89,
    backgroundColor: "#08AD2C",
    borderRadius: 49,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  icon: {
    width: '30%',
    height: '20%'
  },
  containerImage: {
    width: wp('100%'),
    height: hp('100%'),
    alignSelf: 'flex-end',
    backgroundColor: 'red'
  },
  image: {
    
  }
});

export default SplashScreen;
