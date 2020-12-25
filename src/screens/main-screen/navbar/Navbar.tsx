import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { mainStyles } from '..'
import { gloStyles } from '../../../../App'
import { PureButton, PureButtonT } from '../../../reusables/dynamicStuff'
import ParticipantsModal from './modals/ParticipantsModal'
import RoomNameModal from './modals/RoomNameModal'
import { Entypo } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


function Navbar() {
  const navigation = useNavigation()
  const [modalParticipants, setModalParticipants] = useState(false)
  const [modalRoomName, setModalRoomName] = useState(false)

  const pureButtonData: PureButtonT[] = [
    {
      onPress: () => setModalParticipants((prev) => !prev),
      buttonStyle: { marginRight: 20 },
      textStyle: styles.settings,
      text: <MaterialIcons name="group-add" size={25} color="black" />,
    },
    {
      onPress: () => navigation.navigate('rooms'),
      buttonStyle: null,
      textStyle: null,
      text: <Entypo name="dots-three-vertical" size={19} color="black" />,
    },
    {
      onPress: () => setModalRoomName((prev) => !prev),
      buttonStyle: null,
      textStyle: null,
      text: <Feather name="menu" size={24} color="black" />,
    },
  ]

  return (
    <View style={styles.container}>
      {modalParticipants ? <ParticipantsModal setModalParticipants={setModalParticipants} /> : null}
      {modalRoomName ? <RoomNameModal setModalRoomName={setModalRoomName} /> : null}

      <View style={styles.sandwich}>
        <PureButton pureButtonData={pureButtonData[2]} />
        {/* //! Should be dynamic text here for group name */}
        <Text style={styles.text}>League Group</Text>
      </View>

      <View style={styles.innerContainer}>
        <PureButton pureButtonData={pureButtonData[0]} />
      </View>
      <View style={styles.settings}>
        <PureButton pureButtonData={pureButtonData[1]} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a30101',
    height: 55,
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginLeft: 30,
    fontFamily: 'Nunito',
    fontSize: 18,
    color: 'white'
  },
  sandwich: {
    position: 'absolute',
    flexDirection: 'row',
    left: 20,
  },
  innerContainer: {
    position: 'absolute',
    right: 10,
  },
  settings: {
    width: '100%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 30
  },
})

export default Navbar
