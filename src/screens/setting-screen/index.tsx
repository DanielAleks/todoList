import { NavigationContainer, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../App'
import CreateRoom from './createRoom/CreateRoom'
import { AntDesign } from '@expo/vector-icons';
import { Drawer, FAB, Portal, Provider } from 'react-native-paper';
import ModalJoin from './joinRoom/ModalJoin'


function SettingScreen() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  const [isEditing, setIsEditing] = useState(false)
  const [joinModal, setJoinModal] = useState(false)
  const [createModal, setCreateModal] = useState(false)

  const nowEditing = () => {
    navigation.navigate('rooms')
    setIsEditing(prev => !prev)
  }

  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('main')}>
        <AntDesign name="back" size={24} style={styles.buttonBack} color="white" />
      </TouchableOpacity>


      <Provider>
        {/* <Portal> // why do I need Portal??? works without */}

        <FAB.Group
          visible={true}
          open={open}
          icon={open ? 'book-variant' : 'plus'}
          actions={[
            {
              icon: 'account-edit',
              label: isEditing ? 'Turn Off Editing Mode' : 'Edit Rooms',
              onPress: nowEditing,
            },
            {
              icon: 'account-search',
              label: 'Join Room',
              onPress: () => setJoinModal(prev => !prev),
            },
            {
              icon: 'book-plus-multiple',
              label: 'Create Room',
              onPress: () => setCreateModal(true),
            },
          ]}

          onStateChange={onStateChange}
        />

        {/* </Portal> */}
      </Provider>

      {/* {createModal ?
      } */}

      {joinModal ? <ModalJoin setJoinModal={setJoinModal} /> : null}

      {createModal ? <CreateRoom setCreateModal={setCreateModal} /> : null}

      {isEditing ? <View>
        <Text>You are in Editing Mode</Text>
        <TouchableOpacity style={styles.editingMode} onPress={() => setIsEditing(false)}><Text>Turn Off Editing mode</Text></TouchableOpacity>
      </View> : null}
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
  editingMode: {
    height: 40,
    width: 200,
    backgroundColor: '#cccccc',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
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
