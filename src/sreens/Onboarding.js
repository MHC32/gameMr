import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: '1',
    title: 'Shop Original XBox Accessories',
    text1: 'Authorized XBox Dealer.',
    text2: 'Accessories Are Backed By',
    text3: 'Waranty',
    image: require('../../assets/unsplash_UCFDB6O48d0.png'),
    backgroundColor: 'black',
  },
  {
    key: '2',
    title: 'Wilde Collection of The Best Games',
    text: 'Naviguez facilement entre les différentes sections.',
    image: require('../../assets/unsplash_UCFDB6O48d0.png'),
    backgroundColor: 'black',
  },
];

export default function Onboarding() {
  const _renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _onDone = () => {
    // Action à effectuer lorsque l'utilisateur termine le slider
    console.log('Slider terminé');
  };

  return (
    <AppIntroSlider 
      renderItem={_renderItem} 
      data={slides} 
      onDone={_onDone} 
      showSkipButton={true} // Affiche un bouton pour ignorer
      onSkip={_onDone} // Action si l'utilisateur saute l'intro
    />
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginVertical: 30,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
