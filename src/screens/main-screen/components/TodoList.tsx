import { Chip } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native'
import { disableExpoCliLogging } from 'expo/build/logs/Logs'
import React, { useRef, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { gloStyles } from '../../../../App'
import { rootStoreT } from '../../../../store'
import { ADD_TODO } from '../../../reducers/types'
import DelAddTodos from './DelAddTodos';
import { FontAwesome } from '@expo/vector-icons';
import uuid from 'react-native-uuid'
// import addListAction from '../../../actions/addListAction';




function TodoList() {
  const [input, setInput] = useState<any>('')
  const [isFocused, setIsFocused] = useState(false)
  const dispatch = useDispatch()
  const textInputRef = useRef<TextInput>(null)

  const addTodo = () => {
    dispatch({ type: ADD_TODO, payload: input })
    toggleFocus()
    //gotta flip these two but something strange happens
    // dispatch(addListAction({ input }))
  }

  const toggleFocus = () => {
    setIsFocused(prev => !prev)
    isFocused ? textInputRef.current.focus() : textInputRef.current.blur()
  }

  return (
    <View style={styles.container}>


      <DelAddTodos />

      <View style={styles.inputAligning}>
        <TextInput ref={ref => textInputRef.current = ref} style={gloStyles.inputStyle} value={input} onChangeText={(text) => setInput(text)} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.bottomButton} onPress={addTodo}>
          <FontAwesome name="pencil" size={22} color="black" />
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
  inputAligning: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
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
  bigPlus: {
    fontSize: 50,
    color: 'white',
    fontWeight: '100',
  },

})

export default TodoList
