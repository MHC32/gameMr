import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../sreens/SplashScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        </Stack.Navigator>
    )
}

export default HomeStack;