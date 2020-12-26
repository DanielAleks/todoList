import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/main-screen'
import WelcomeScreen from './screens/welcome-screen'
import { Provider } from 'react-redux';
import configureStore from '../store'
import SettingScreen from './screens/setting-screen';
import { AntDesign } from '@expo/vector-icons';
import Profile from './screens/main-screen/Profile';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Navigation = () => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            options={{
              drawerIcon: () =>
                <MaterialIcons name="person-outline" size={24} color="black" />
            }}
            name="Profile" component={Profile} />
          <Drawer.Screen options={{
            drawerIcon: () =>
              <AntDesign name="calendar" size={24} color="black" />
          }}
            name="MainRoom" component={MainScreen} />
          <Drawer.Screen
            options={{
              drawerIcon: () =>
                <MaterialCommunityIcons name="file-cabinet" size={24} color="black" />
            }}
            name="Rooms" component={SettingScreen} />
          <Drawer.Screen
            options={{
              drawerIcon: () =>
                <Feather name="log-out" size={24} color="orange" />
            }}
            name="Logout" component={WelcomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>


    // <Provider store={store}>
    //   <NavigationContainer>
    //     <Drawer.Section title="Some title">
    //       <Drawer.Item
    //         label="First Item"
    //       />
    //       <Drawer.Item
    //         label="Second Item"
    //       />
    //     </Drawer.Section>
    //   </NavigationContainer>
    // </Provider>
  )
}

export default Navigation