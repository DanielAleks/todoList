import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gloStyles } from '../../../App'
import CreateRoom from './createRoom/CreateRoom'
import { FAB, Provider } from 'react-native-paper'
import ModalJoin from './joinRoom/ModalJoin'
import RemoveARoom from './createRoom/RemoveARoom'
import { DynamicBack, PureButton } from '../../reusables/dynamicStuff'
import { useSelector } from 'react-redux'
import { rootStoreT } from '../../../store'
import DelAddTodos from '../main-screen/components/DelAddTodos'

function SettingScreen() {
  const rooms = useSelector((state: rootStoreT) => state.rooms)
  const navigation = useNavigation()
  const [state, setState] = useState({ open: false })
  const [isEditing, setIsEditing] = useState(false)
  const [joinModal, setJoinModal] = useState(false)
  const [createModal, setCreateModal] = useState(false)
  const onStateChange = ({ open }) => setState({ open })
  const { open } = state

  const pureButtonData = {
    button: () => setIsEditing(false),
    text: 'Turn Off Editing mode',
    textStyle: gloStyles.whiteText,
    buttonStyle: gloStyles.button
  }

  const backData = {
    button: () => navigation.navigate('main'),
    style: gloStyles.buttonBack,
  }

  const nowEditing = () => {
    navigation.navigate('rooms')
    setIsEditing((prev) => !prev)
  }

  return (
    <View style={styles.modalContainer}>
      <DynamicBack backData={backData} />

      <View style={styles.headerContainer}>
        <Text style={styles.header}>My Rooms:</Text>
      </View>
      <View style={styles.roomContainer}>
        {rooms.map((item) => (
          <RemoveARoom item={item} />
        ))}
      </View>
      {createModal ? <CreateRoom setCreateModal={setCreateModal} /> : null}
      {joinModal ? <ModalJoin setJoinModal={setJoinModal} /> : null}
      {isEditing ? (
        <View>
          <Text>You are in Editing Mode</Text>
          <PureButton pureButtonData={pureButtonData} />
        </View>
      ) : null}

      <Provider>
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
              onPress: () => setJoinModal((prev) => !prev),
            },
            {
              icon: 'book-plus-multiple',
              label: 'Create Room',
              onPress: () => setCreateModal((prev) => !prev),
            },
          ]}
          onStateChange={onStateChange}
        />
      </Provider>
    </View>
  )
}
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    height: 800,
    position: 'absolute',
    top: 0,
    display: 'flex',
  },
  header: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 22,
  },
  plusButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 1000,
    width: 1000,
  },
  joinRoomButton: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  roomContainer: {
    position: 'absolute',
    width: '100%',
    top: 100,
  },
})

export default SettingScreen
