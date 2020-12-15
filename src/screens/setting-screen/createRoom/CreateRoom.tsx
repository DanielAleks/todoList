import React, { useRef, useState } from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet, Modal } from 'react-native'
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
    if (input.length > 0) {
      dispatch({ type: ADD_ROOM, payload: input })
    } else return
    setInput('')
  }

  return (
    <View>

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
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dadada',
    flex: 1,
    width: '100%',
  },
  buttonAlign: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
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
