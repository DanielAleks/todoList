import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { mainStyles } from '..'
import { gloStyles } from '../../../../App'
import { PureButton, PureButtonT } from '../../../reusables/dynamicStuff'
import ParticipantsModal from './modals/ParticipantsModal'
import RoomNameModal from './modals/RoomNameModal'

function Navbar() {
  const navigation = useNavigation()
  const [modalParticipants, setModalParticipants] = useState(false)
  const [modalRoomName, setModalRoomName] = useState(false)

  const pureButtonData: PureButtonT[] = [
    {
      onPress: () => setModalParticipants((prev) => !prev),
      buttonStyle: mainStyles.header,
      textStyle: gloStyles.blackText,
      text: 'Danile, Ja...',
    },
    {
      onPress: () => navigation.navigate('rooms'),
      buttonStyle: mainStyles.button,
      textStyle: gloStyles.whiteText,
      text: '...',
    },
    { 
      onPress: () => setModalRoomName((prev) => !prev),
      buttonStyle: mainStyles.header,
      textStyle: gloStyles.whiteText,
      text: 'NameOFgroup',
    },
  ]
  return (
    <View style={styles.container}>
      {modalParticipants ? <ParticipantsModal setModalParticipants={setModalParticipants} /> : null}

      <View style={styles.innerContainer}>
        <PureButton pureButtonData={pureButtonData[0]} />
      </View>

      {modalRoomName ? <RoomNameModal setModalRoomName={setModalRoomName} /> : null}

      <View style={{ position: 'absolute' }}>
        <PureButton pureButtonData={pureButtonData[2]} />
      </View>

      <View style={styles.settings}>
        <PureButton pureButtonData={pureButtonData[1]} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff6702',
    top: 0,
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    position: 'absolute',
    left: 0,
    marginLeft: 10,
  },
  settings: {
    width: '100%',
    alignItems: 'flex-end',
  },
})

export default Navbar
