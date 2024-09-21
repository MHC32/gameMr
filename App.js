import {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/navigation/HomeStack';

export default function App() {
  return (
   <NavigationContainer>
      <HomeStack/>
      <StatusBar style="light" backgroundColor='black'  />
   </NavigationContainer>
  );
}


