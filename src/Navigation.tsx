import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/main-screen'
import WelcomeScreen from './screens/welcome-screen'
import { Provider } from 'react-redux';
import configureStore from '../store'
import SettingScreen from './screens/setting-screen';

const Drawer = createDrawerNavigator();
const Navigation = () => {
  const store = configureStore()

  return (
   
    

    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            options={{ title: 'Welcome!' }}
            name="welcome" component={WelcomeScreen} />
          <Drawer.Screen
            options={{ title: 'Main!' }}
            name="main" component={MainScreen} />
          <Drawer.Screen
            options={{ title: 'Rooms!' }}
            name="rooms" component={SettingScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default Navigation
{/* <Drawer.Section title="Some title">
    <Drawer.Item
      label="First Item"
    />
    <Drawer.Item
      label="Second Item"
    />
  </Drawer.Section> */}