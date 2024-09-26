import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../sreens/SplashScreen';
import Onboarding from '../sreens/Onboarding';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SplashScreen" component={SplashScreen}/>
            <Stack.Screen name='Onboarding' component={Onboarding}/>
        </Stack.Navigator>
    )
}

export default HomeStack;