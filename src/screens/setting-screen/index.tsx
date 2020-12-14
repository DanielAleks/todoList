import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../App'
import CreateRoom from './createRoom/CreateRoom'
import JoinARoom from './joinRoom/JoinARoom'
import { AntDesign } from '@expo/vector-icons';


function SettingScreen() {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <View>
      <Modal>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="back" size={24} style={styles.buttonBack} color="white" />
          </TouchableOpacity>

          <CreateRoom />

          <View style={styles.joinRoomButton}>
            <JoinARoom />
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
