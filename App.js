import {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import useCustomFonts from './utils/fonts';

export default function App() {
  const { loaded, error } = useCustomFonts();

  if (!loaded && !error) {
    return null; 
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'UrbanistVariable' }}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
