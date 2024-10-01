import React, { useState, useRef } from 'react';
import { View, Text, Image, FlatList, Animated, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BackgroundAnimation from '../components/BackgroundAnimation';
import { scale } from 'react-native-size-matters';

const slides = [
  {
    key: '1',
    title: 'Shop Original XBox Accessories',
    text1: 'Authorized XBox Dealer.',
    text2: 'Accessories Are Backed By',
    text3: 'Warranty',
    image: require('../../assets/unsplash_UCFDB6O48d0.png'),
  },
  {
    key: '2',
    title: 'Wide Collection of The Best Games',
    text1: 'Explore and enjoy!',
    image: require('../../assets/unsplash_UCFDB6O48d0.png'),
    hasSpecialAnimation: true,  // Spécifie que ce slide a une animation spéciale
  },
];

export default function CustomSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const renderItemSlide1 = ({ item, index }) => {
    const inputRange = [(index - 1) * wp('100%'), index * wp('100%'), (index + 1) * wp('100%')];
    
    const translateX = scrollX.interpolate({
      inputRange,
      outputRange: [-wp('100%'), 0, wp('100%')],
    });

    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Animated.View style={[styles.textContainer, { transform: [{ translateX }] }]}>
          <Text style={styles.text}>{item.text1}</Text>
          <Text style={styles.text}>{item.text2}</Text>
          <Text style={styles.text}>{item.text3}</Text>
        </Animated.View>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  const renderItemSlide2 = () => (
    <View style={styles.slideSpecial}>
      <BackgroundAnimation />
    </View>
  );

  const renderItem = ({ item, index }) => {
    return item.hasSpecialAnimation ? renderItemSlide2() : renderItemSlide1({ item, index });
  };

  const renderCustomDots = () => (
    <View style={styles.dotContainer}>
      {slides.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            activeIndex === index ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );

  
  const backgroundColor = activeIndex === 1 ? 'black' : 'black';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Animated.FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        onScroll={handleScroll}
        onMomentumScrollEnd={(event) => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const index = Math.round(contentOffsetX / wp('100%'));
          setActiveIndex(index);
        }}
      />
      {renderCustomDots()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  slide: {
    width: wp('100%'),
    height: hp('95%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: scale(28),
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: hp('15%'),
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  text: {
    color: '#B5B5B5',
    fontSize: scale(14),
    fontWeight: '500',
    textAlign: 'center',
  },
  image: {
    width: wp('80%'),
    height: hp('38%'),
    marginTop: hp('9%'),
  },
  slideSpecial: {
    width: wp('100%'),
    height: hp('95%'),
    justifyContent: 'center',
    alignItems: 'center',

  },
  titleSpecial: {
    fontSize: scale(32),
    fontWeight: '700',
    color: '#FFF',
    textAlign: 'center',
  },
  textSpecial: {
    color: '#FFFFFF',
    fontSize: scale(16),
    fontWeight: '500',
    textAlign: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  dot: {
    width: 40,
    height: 2,
    marginHorizontal: 3,
  },
  activeDot: {
    height: 4,
    backgroundColor: '#08AD2C',
  },
  inactiveDot: {
    backgroundColor: 'gray',
  },
});
