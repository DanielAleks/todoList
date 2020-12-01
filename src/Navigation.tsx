import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/main-screen'
import WelcomeScreen from './screens/welcome-screen'

const Stack = createStackNavigator();

const Navigation = () => {
  return (
  <NavigationContainer >
    <Stack.Navigator>
      <Stack.Screen 
        options={{ title: 'Main!' }}
        name="main" component={MainScreen} />
        <Stack.Screen
        options={{ title: 'Welcome!' }}
        name="welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation
