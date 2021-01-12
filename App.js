import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import FormScreen from './src/screens/FormScreen';
import VideoScreen from './src/screens/VideoScreen';
import PlayerScreen from './src/screens/PlayerScreen';

const Stack = createStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Video Screen" component={VideoScreen}/>
                <Stack.Screen name="Home Screen" component={HomeScreen}/>
                <Stack.Screen name="Form Screen" component={FormScreen}/>
                <Stack.Screen name="Player Screen" component={PlayerScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
