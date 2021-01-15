import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gloStyles } from '../../../App'
import CreateRoom from './createRoom/CreateRoom'
import { FAB, Portal, Provider } from 'react-native-paper'
import ModalJoin from './joinRoom/ModalJoin'
import RemoveARoom from './createRoom/RemoveARoom'
import { DynamicBack, DynamicBackT, PureButton, PureButtonT } from '../../reusables/dynamicStuff'
import { useSelector } from 'react-redux'
import { rootStoreT } from '../../../store'
import Navbar from '../main-screen/navbar/Navbar'
import { navStyles } from '../main-screen/navbar/Navbar'
import { Entypo } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import settingsNavbar from './navbar/SettingsNavbar'
import SettingsNavbar from './navbar/SettingsNavbar'

function SettingScreen() {
  const rooms = useSelector((state: rootStoreT) => state.rooms)
  const navigation: any = useNavigation()
  const [state, setState] = useState({ open: false })
  const [isEditing, setIsEditing] = useState(false)
  const [joinModal, setJoinModal] = useState(false)
  const [createModal, setCreateModal] = useState(false)
  const onStateChange = ({ open }) => setState({ open })
  const { open } = state

  const backData: DynamicBackT = {
    onPress: () => navigation.navigate('main'),
    style: styles.buttonBack,
  }

  const nowEditing = () => {
    navigation.navigate('rooms')
    setIsEditing((prev) => !prev)
  }

  // const pureButtonData: PureButtonT = {
  //   onPress: nowEditing,
  //   text: 'In Editing Mode',
  //   textStyle: gloStyles.whiteText,
  //   buttonStyle: gloStyles.button
  // }


  return (
    <View style={styles.modalContainer}>
      <SettingsNavbar />
      <View style={styles.roomContainer}>
        {rooms.map((item) =>
          <RemoveARoom key={item.id} item={item} />
        )}
      </View>

      { createModal ? <CreateRoom setCreateModal={setCreateModal} /> : null}
      { joinModal ? <ModalJoin setJoinModal={setJoinModal} /> : null}
      {
        isEditing ?
          <View>
            <Text>You are in Editing Mode</Text>
            {/* <PureButton pureButtonData={pureButtonData} /> */}
          </View>
          : null
      }


      <Provider>
        <Portal>
          <FAB.Group
            fabStyle={{ backgroundColor: '#a30101' }}
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
        </Portal >
      </Provider>
    </View >
  )
}
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#302f2f',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    display: 'flex'
  },
  buttonBack: {
    margin: 10,
    marginTop: 40,
    backgroundColor: '#3a3a3a',
    width: 25,
    borderRadius: 5
  },
  header: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 22,
    color: '#dddddd'
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
    backgroundColor: '#222222',
    width: '100%',
    top: 100,
  },
})

export default SettingScreen
