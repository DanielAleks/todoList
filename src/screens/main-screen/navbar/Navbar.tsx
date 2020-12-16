import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { gloStyles } from '../../../../App';
import ParticipantsModal from './modals/ParticipantsModal';
import RoomNameModal from './modals/RoomNameModal';

function Navbar() {
  // const [title, setTitle] = useState('')
  const navigation = useNavigation()
  // const dispatch = useDispatch()
  const [modalParticipants, setModalParticipants] = useState(false)
  const [modalRoomName, setModalRoomName] = useState(false)

  const ModalName = () =>
    modalRoomName ? <RoomNameModal setModalRoomName={setModalRoomName} /> : null

  const ModalOFParticipants = () =>
    modalParticipants ? <ParticipantsModal setModalParticipants={setModalParticipants} /> : null


  return (
    <View style={styles.container}>
      <ModalOFParticipants />
      <View style={{ position: 'absolute', left: 0, marginLeft: 10 }}>
        <TouchableOpacity onPress={() => setModalParticipants(prev => !prev)}>
          <Text style={gloStyles.blackText}>Danile, Ja...</Text>
        </TouchableOpacity>
      </View>
      <ModalName />
      <View style={{ position: 'absolute' }}>
        <TouchableOpacity onPress={() => setModalRoomName(prev => !prev)}>
          <Text style={styles.blackText}>NameOFgroup</Text>
        </TouchableOpacity>
      </View>

      <View style={{ width: '100%', alignItems: 'flex-end' }}>
        <TouchableOpacity style={gloStyles.button} onPress={() => navigation.navigate('rooms')}>
          <Text style={gloStyles.blackText}>...</Text>
        </TouchableOpacity>
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
    alignItems: 'center'
  },
  blackText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17
  },

});

export default Navbar
