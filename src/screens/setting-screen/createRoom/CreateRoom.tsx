import React, { useRef, useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native'
import { TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../../App'
import { ADD_ROOM } from '../../../reducers/types'
import RemoveARoom from './RemoveARoom'

function CreateRoom() {
  const [input, setInput] = useState<any>('')
  // const [isFocused, setIsFocused] = useState(false)
  const dispatch = useDispatch()
  const textInputRef = useRef(null)
  const [theModal, setTheModal] = useState(false)

  const addTodo = () => {
    dispatch({ type: ADD_ROOM, payload: input })
    setInput('')
  }

  const makeModal = () => {
    // setTheModal(prev => )
  }


  return (
    <View style={styles.container}>

      <RemoveARoom />

      <View style={styles.inputContainer}>
        <TextInput ref={ref => textInputRef.current = ref} style={gloStyles.inputStyle} value={input} onChangeText={(text) => setInput(text)} />
      </View>

      <View style={styles.buttonAlign}>
        <TouchableOpacity onPress={addTodo} style={{ ...gloStyles.longButton, ...styles.longStyles }}>
          <Text style={gloStyles.blackText}>Create Room</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dadada',
    flex: 1,
    width: '100%',
  },
  buttonAlign: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  longStyles: {
    marginBottom: 10,
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
