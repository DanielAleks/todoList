import React from 'react'
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/main-screen'
import WelcomeScreen from './screens/welcome-screen'
import { Provider } from 'react-redux';
import configureStore from '../store'
import SettingScreen from './screens/setting-screen';
import { StatusBar, View } from 'react-native';

const Drawer = createDrawerNavigator();
const Navigation = () => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <NavigationContainer>

          <Drawer.Navigator>
            <Drawer.Screen
              options={{ title: 'Main!' }}
              name="main" component={MainScreen} />
            <Drawer.Screen
              options={{ title: 'Welcome!' }}
              name="welcome" component={WelcomeScreen} />
            <Drawer.Screen
              options={{ title: 'Rooms!' }}
              name="rooms" component={SettingScreen} />
          </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default Navigation
