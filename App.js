import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/navigation/HomeStack';
import OnBoardingStack from './src/navigation/OnBoardingStack'; // Correction du nom

const RootStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="HomeStack" component={HomeStack} />
        <RootStack.Screen name="OnBoardingStack" component={OnBoardingStack} />
      </RootStack.Navigator>
      <StatusBar style="light" backgroundColor="black" />
    </NavigationContainer>
  );
}


