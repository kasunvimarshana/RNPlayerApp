import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import VideoScreen from './src/screens/VideoScreen';
import FormScreen from './src/screens/FormScreen';
import PlayerScreen from './src/screens/PlayerScreen';

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          stackAnimation: "flip",
          stackPresentation: "modal"
        }}>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: "Home" }}/>
        <Stack.Screen 
          name="Video" 
          component={VideoScreen}
          options={{ title: "Video" }}/>
        <Stack.Screen 
          name="Form" 
          component={FormScreen}
          options={{ title: "Form" }}/>
        <Stack.Screen 
          name="Player" 
          component={PlayerScreen}
          options={{ title: "Player" }}/>
      </Stack.Navigator>
    </NavigationContainer>
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
