import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OnBoarding1 from '../sreens/OnBoarding1';
import OnBoarding2 from '../sreens/OnBoarding2';

const Tab = createMaterialTopTabNavigator();

const OnBoardingStack = () => {
  return (
    <Tab.Navigator
      swipeEnabled={true} 
      screenOptions={{
        tabBarStyle: { display: 'none' },  // Masquer la top-bar
      }}
    >
      <Tab.Screen name="page1" component={OnBoarding1} />
      <Tab.Screen name="page2" component={OnBoarding2} />
    </Tab.Navigator>
  );
};

export default OnBoardingStack;
