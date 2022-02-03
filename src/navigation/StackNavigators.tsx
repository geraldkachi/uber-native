import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen'
import RequestScreen from '../screens/RequestScreen';
import DestinationScreen from '../screens/DestinationScreen';


const Home = createNativeStackNavigator();

export function HomeStack(){
    return(
        <Home.Navigator screenOptions={{ headerShown: false}} >
            <Home.Screen name="HomeScreen" component={HomeScreen} />
            <Home.Screen name="RequestScreen" component={RequestScreen} /> 
             <Home.Screen name="DestinationScreen" component={DestinationScreen} /> 
        </Home.Navigator>
    )
}