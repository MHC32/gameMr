import React, { useState, useRef } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
    title: 'Wild Collection of The Best Games',
    text1: 'Explore and enjoy!',
    image: require('../../assets/unsplash_UCFDB6O48d0.png'),
  },
];

export default function CustomSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / wp('100%'));
    setActiveIndex(index);
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.text1}</Text>
        <Text style={styles.text}>{item.text2}</Text>
        <Text style={styles.text}>{item.text3}</Text>
      </View>
      <Image source={item.image} style={styles.image} />
    </View>
  );

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

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        onScroll={handleScroll}
      />
      {renderCustomDots()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
    marginTop: hp('15%')
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1%')
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
    marginTop: hp('9%')
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 15,
    alignSelf: 'flex-start'
  },
  dot: {
    width: 40,
    height: 2,
    marginHorizontal: 3,
    
  },
  activeDot: {
    height: 4,
    backgroundColor: "#08AD2C",
  },
  inactiveDot: {
    backgroundColor: 'gray',
  },
});
