import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native'
import { TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../../../App'
import CreateRoom from './createRoom/CreateRoom'
import JoinARoom from './joinRoom/JoinARoom'
import Navbar from './Navbar'

function SettingsModal(modalVisable) {
  const [modalVisabley, setModalVisabley] = useState(false)
  const navigation = useNavigation()
  const dispatch = useDispatch()


  const modalToggle = () => {
    setModalVisabley(prev => !prev)
  }

  return (
    <View>
      <Modal>
        <View style={styles.modalContainer}>

          <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() => navigation.navigate('main')} style={{ ...gloStyles.button, backgroundColor: '#5eccff', alignItems: 'center', }} >
              <Text>GoBack</Text>
            </TouchableOpacity>
          </View>

            <CreateRoom/>

          <View style={{ position: 'absolute', bottom: 100, width: '100%' }}>



            <TouchableOpacity style={{ ...gloStyles.longButton, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={gloStyles.text}>Join Room</Text>
            </TouchableOpacity>
            <JoinARoom/>
          </View>
        </View>
      </Modal>
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
  text: {
    fontSize: 14,
    color: 'white',
  },
});


export default SettingsModal
