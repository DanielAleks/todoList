import { Chip } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native'
import { disableExpoCliLogging } from 'expo/build/logs/Logs'
import React, { useRef, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { gloStyles } from '../../../../App'
import { rootStoreT } from '../../../../store'
import { ADD_TODO } from '../../../reducers/types'
import { FontAwesome } from '@expo/vector-icons';
import uuid from 'react-native-uuid'
import { v4 as uuidv4 } from 'uuid';
import DelAddTodos from './DelAddTodos';
// import addListAction from '../../../actions/addListAction';


const v4 = uuid

function TodoList() {
  const [input, setInput] = useState<any>('')
  const [isFocused, setIsFocused] = useState(false)
  const dispatch = useDispatch()
  const textInputRef = useRef<TextInput>(null)

  const addTodo = () => {
    toggleFocus()
    if (input.length > 0) {

      dispatch({ type: ADD_TODO, payload: input })
    } else return
    setInput('')
    //gotta flip these two but something strange happens
    // dispatch(addListAction({ input }))
  }

  const toggleFocus = () => {
    setIsFocused(true)
    isFocused ? textInputRef.current.focus() : textInputRef.current.blur()
  }

  return (
    <View style={styles.container}>

      <DelAddTodos />

      <View style={styles.inputAligning}>
        <TextInput placeholder='My Todos...' ref={ref => textInputRef.current = ref} style={gloStyles.inputStyle} value={input} onChangeText={(text) => setInput(text)} />
      </View>
      <View style={styles.buttonContainer} >
        <TouchableOpacity style={styles.bottomButton} onPress={addTodo}>
          <FontAwesome name="pencil" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    flex: 1,
    width: '100%',
  },
  inputAligning: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    left: 100
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  bottomButton: {
    backgroundColor: '#ff6702',
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 180,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },

})

export default TodoList
