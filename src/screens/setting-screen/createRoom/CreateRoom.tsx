import React, { useRef, useState } from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet, Modal } from 'react-native'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../../App'
import { ADD_ROOM } from '../../../reducers/types'
import RemoveARoom from './RemoveARoom'
import { Feather } from '@expo/vector-icons';
import { disableExpoCliLogging } from 'expo/build/logs/Logs'

function CreateRoom({ setCreateModal }) {
  const [input, setInput] = useState<any>('')
  // const [isFocused, setIsFocused] = useState(false)
  const dispatch = useDispatch()
  const textInputRef = useRef(null)
  const [theModal, setTheModal] = useState(false)
  const [name, setName] = useState('')
  const [theme, setTheme] = useState([])
  const [invite, setInvite] = useState('')

  const themes = ['blue', 'red', 'green', 'purple', 'pink']

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

            <View style={styles.innerContainer}>
              <Text>Name</Text>
              <TextInput style={gloStyles.inputStyle} value={name} />
            </View>

            <View style={styles.innerContainer}>
              <Text>Invite</Text>
              <TextInput style={gloStyles.inputStyle} value={invite} />
            </View>

            <View style={styles.innerContainer}>
              <Text>Theme</Text>
              <Text>{themes}</Text>

              {/* //         <View style={styles.inputContainer}>
    //           <TextInput ref={ref => textInputRef.current = ref} style={gloStyles.inputStyle} value={input} onChangeText={(text) => setInput(text)} />
  //         </View> */}
            </View>
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
  modalArea: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 400,
    width: 300,
    backgroundColor: 'pink'
  },
  modalContainer: {
    backgroundColor: '#b90600',
    width: '80%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  buttonAlign: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  longStyles: {
    backgroundColor: 'red',
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default CreateRoom
