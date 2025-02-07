import { createStackNavigator } from '@react-navigation/stack';
import { Screens1 } from '../Screens/Screens1';
import { Screens2 } from '../Screens/Screens2';


const Stack = createStackNavigator();

export const StackNavigator = ()=> {
return (
    <Stack.Navigator screenOptions={{
        cardStyle:{
            backgroundColor: '#FDF1DD'
        }
    }}>
    <Stack.Screen name="Screen1"  component={Screens1} />
    <Stack.Screen name="Screen2" options={{headerShown: false}} component={Screens2} />
    </Stack.Navigator>
);
}