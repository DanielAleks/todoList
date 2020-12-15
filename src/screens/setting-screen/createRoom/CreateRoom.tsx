import React, { useRef, useState } from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet, Modal } from 'react-native'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../../App'
import { ADD_ROOM } from '../../../reducers/types'
import RemoveARoom from './RemoveARoom'
import { Feather } from '@expo/vector-icons';
import { disableExpoCliLogging } from 'expo/build/logs/Logs'
// import DropDownPicker from 'react-native-dropdown-picker';

function CreateRoom({ setCreateModal }) {
  const [input, setInput] = useState<any>('')
  // const [isFocused, setIsFocused] = useState(false)
  const dispatch = useDispatch()
  const textInputRef = useRef(null)
  const [theModal, setTheModal] = useState(false)
  const [name, setName] = useState('')
  const [theme, setTheme] = useState([])
  const [invite, setInvite] = useState('')
  const [isColor, setIsColor] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false);

  const themes = [
    { label: 'Default', value: '#ff6702' },
    { label: 'Aqua Menthe', value: '#7fffd4' },
    { label: 'Proton Purple', value: '#8a2be2' },
    { label: 'Office Green', value: '#008000' },
    { label: 'Just Blue', value: '#0000ff' },
    { label: 'Blush Pink', value: '#ffc0cb' },
    { label: 'Chartreuse Yellow', value: '#dfff00' },
    { label: 'Cosmic Latte', value: '#fff9e3' },
  ]

  const addTodo = () => {
    if (input.length > 0) {
      dispatch({ type: ADD_ROOM, payload: input })
    } else return
    setInput('')
  }

  return (
      <Modal
        transparent={true}
        visible={true}
      >
        <View style={gloStyles.modalBg}>
          <View style={styles.absoluteModal}>
            <View style={styles.modalArea}>
              <TouchableOpacity style={gloStyles.x} onPress={() => setCreateModal(false)}>
                <Feather name="x-circle" size={24} color="black" />
              </TouchableOpacity>

              <Text style={styles.header}>Create New Room</Text>

              <View>
                <Text>Name</Text>
                <TextInput style={gloStyles.inputStyle} value={name} onChangeText={(text) => setName(text)} />
              </View>

              <View>
                <Text>Invite</Text>
                <TextInput style={gloStyles.inputStyle} value={invite} onChangeText={(text) => setInvite(text)} />
              </View>

              <TouchableOpacity style={gloStyles.button} onPress={addTodo}>
                <Text style={gloStyles.whiteText}>Create Room</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal>
  );
};
const styles = StyleSheet.create({
  absoluteModal: {
    position: 'absolute',
    bottom: '30%',
    right: '15%',
  },
  header: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold'
  },
  modalArea: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 250,
    width: 300,
    backgroundColor: '#c43d3d'
  },
})
export default CreateRoom
