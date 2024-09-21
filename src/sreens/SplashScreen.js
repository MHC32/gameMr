import { View, Text, StyleSheet, Dimensions } from 'react-native';
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

const SplashScreen = () => {
  const width = Dimensions.get('window').width;
  const { loaded } = useCustomFonts();
  const translateY = useSharedValue(100);
  const circleTranslateX = useSharedValue(0);
  const circleScale = useSharedValue(70)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const animatedCircle = useAnimatedStyle(() => ({
    transform: [

      { translateX: circleTranslateX.value },
    ],
  }));

  useEffect(() => {
    if (loaded) {
      translateY.value = withTiming(0, { duration: 500 });
      circleTranslateX.value = withSequence(
        withTiming(0, { duration: 500, easing: Easing.bezier(0.39, 0.49, 0.25, 0.42), }),
        withTiming(width / 3, { duration: 500, easing: Easing.bezier(0.39, 0.49, 0.25, 0.42), }),
        withTiming(0, { duration: 500, easing: Easing.bezier(0.39, 0.49, 0.25, 0.42), }), 
        withTiming(-width / 3, { duration: 500, easing: Easing.bezier(0.39, 0.49, 0.25, 0.42), }), 
        withTiming(width / 3, { duration: 500, easing: Easing.bezier(0.39, 0.49, 0.25, 0.42), }) 
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
      <Animated.View style={[styles.containerLogo, animatedStyle]}>
        <Text style={styles.logo}>gamr</Text>
        <Animated.View style={[styles.circle, animatedCircle]} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  containerLogo: {
    width: wp('100%'),
    height: hp('17%'),
    alignItems: 'center',
    position: "relative",
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
});

export default SplashScreen;
