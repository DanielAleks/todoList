import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../App'
import CreateRoom from './createRoom/CreateRoom'
import JoinARoom from './joinRoom/JoinARoom'

function SettingScreen() {
  const navigation = useNavigation()
  const dispatch = useDispatch()

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


export default SettingScreen
