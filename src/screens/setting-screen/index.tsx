import { NavigationContainer, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../App'
import CreateRoom from './createRoom/CreateRoom'
import JoinARoom from './joinRoom/JoinARoom'
import { AntDesign } from '@expo/vector-icons';
import { Drawer, FAB, Portal, Provider } from 'react-native-paper';


function SettingScreen() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  const [isEditing, setIsEditing] = useState(false)

  const nowEditing = () => {
    navigation.navigate('rooms')
    setIsEditing(true)
  }
  
  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('main')}>
        <AntDesign name="back" size={24} style={styles.buttonBack} color="white" />
      </TouchableOpacity>

      <Portal>
        <FAB.Group
          visible={true}
          open={open}
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            {
              icon: 'account-arrow-left',
              label: 'Edit Rooms',
              onPress: nowEditing,
            },
            {
              icon: 'email',
              label: 'Join Room',
              onPress: () => navigation.navigate('join'),
            },
            {
              icon: 'bell',
              label: 'Create Room',
              onPress: () => navigation.navigate('create'),
            },
          ]}

          onStateChange={onStateChange}
          onPress={() => {
            console.log('objectsdd')
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>

      {isEditing ?
        <Text>You are in Editing Mode</Text>
        : null}


    </View>
  )
}
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#e8eeb6',
    width: '100%',
    height: 800,
    position: 'absolute',
    top: 0,
    display: 'flex',
  },
  joinRoomButton: {
    position: 'absolute',
    bottom: 100,
    width: '100%'
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
  buttonBack: {
    margin: 10,
    backgroundColor: '#3a3a3a',
    width: 25,
    borderRadius: 5
  }
});


export default SettingScreen
