import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../sreens/SplashScreen';
import OnBoarding1 from '../sreens/OnBoarding1';


const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        </Stack.Navigator>
    )
}

export default HomeStack;