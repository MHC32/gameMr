import { FlatList, StyleSheet, Image, View } from 'react-native';
import React, {useEffect} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, {useSharedValue, useAnimatedStyle, withTiming, withRepeat, withSequence, Easing, ReduceMotion } from 'react-native-reanimated';

const slide1 = [
  { id: 1, image: require('../../assets/images/cover/fifa23.png') },
  { id: 2, image: require('../../assets/images/cover/need-for-speed.png') },
  { id: 3, image: require('../../assets/images/cover/gotham-knights.png') },
  { id: 4, image: require('../../assets/images/cover/red-dead-redemption.png') },
  { id: 5, image: require('../../assets/images/cover/fifa23.png') },
];

const slide2 = [
  { id: 1, image: require('../../assets/images/cover/dead-by-day-light.png') },
  { id: 2, image: require('../../assets/images/cover/the-witcher.png') },
  { id: 3, image: require('../../assets/images/cover/wonderlands.png') },
  { id: 4, image: require('../../assets/images/cover/star-wars-lego.png') },
  { id: 5, image: require('../../assets/images/cover/cyberpunk.png') },
];

const slide3 = [
  { id: 1, image: require('../../assets/images/cover/bordelands3.png') },
  { id: 2, image: require('../../assets/images/cover/ghost-recorn.png') },
  { id: 3, image: require('../../assets/images/cover/riders-republic.png') },
  { id: 4, image: require('../../assets/images/cover/midnight-suns.png') },
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
    </View>
  );
};

const BackgroundAnimation = () => {
  const translateY = useSharedValue(0);


  const animatedStyle = useAnimatedStyle(()=> ({
    transform: [{translateY:  translateY.value}]
  }))

  useEffect(() => {
    translateY.value = withRepeat(
      withSequence(
        withTiming(100, { duration: 3000, easing: Easing.bezier(0.34, -0.65, 0.53, 1.42),reduceMotion: ReduceMotion.System, }), 
        withTiming(-100, { duration: 3000, easing: Easing.bezier(0.34, -0.65, 0.53, 1.42),reduceMotion: ReduceMotion.System, })
      ),
      -1
    );
  }, [translateY]);
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Animated.FlatList
          style={animatedStyle}
          data={slide1}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true} 
        />
      </View>

      <View style={styles.column}>
        <FlatList
          data={slide2}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
        />
      </View>

      <View style={styles.column}>
        <FlatList
          data={slide3}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
        />
      </View>
    </View>
  );
};

export default BackgroundAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: 'black',
    zIndex: 0
  },
  column: {
    width: wp('30%'),
    height: hp('100%'),
  },
  imageContainer: {
    marginVertical: hp('2%'),
  },
  image: {
    // width: wp('28%'),
    // height: hp('15%'), 
  },
});
