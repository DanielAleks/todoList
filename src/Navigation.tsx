import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import MainScreen from './screens/main-screen'
import WelcomeScreen, { signInStyles } from './screens/welcome-screen'
import { Provider } from 'react-redux';
import configureStore from '../store'
import SettingScreen from './screens/setting-screen';
import { AntDesign } from '@expo/vector-icons';
import Profile from './screens/main-screen/Profile';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import { Image, ImageBackground, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import ParticipantsModal from './screens/main-screen/navbar/modals/ParticipantsModal';
import Navbar from './screens/main-screen/navbar/Navbar';

const Drawer = createDrawerNavigator();
const Navigation = () => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <NavigationContainer>

        <Drawer.Navigator

          drawerStyle={{ backgroundColor: '#1f1f1f' }}
          drawerContentOptions={{
            activeTintColor: '#00dbbe',
            inactiveTintColor: '#9e9e9e',
            labelStyle: {
              marginLeft: 5
            }
          }}>
          {/* <ScrollView>
            <ImageBackground
              style={{ width: '100%', height: 100, }}
              source={require('../assets/books.jpg')}
            />
          </ScrollView> */}
 
          <Drawer.Screen
            options={{
              drawerIcon: () =>
                <AntDesign name="calendar" size={24} color="black" />
            }}
            name="MainRoom" component={MainScreen} />
          <Drawer.Screen
            options={{
              drawerIcon: () =>
                <MaterialIcons name="person-outline" size={24} color="black" />
            }}
            name="Profile" component={Profile} />
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
  )
}
export default Navigation