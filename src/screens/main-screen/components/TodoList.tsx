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

function TodoList() { 
  const [input, setInput] = useState<any>('')
  const [isFocused, setIsFocused] = useState(false)
  const dispatch = useDispatch()
  const textInputRef = useRef<TextInput>(null)

  const addTodo = () => {
    dispatch({ type: ADD_TODO, payload: input })
    toggleFocus()
  }

  const toggleFocus = () => {
    setIsFocused(prev => !prev)
    isFocused ? textInputRef.current.focus() : textInputRef.current.blur()

  }
  
  return (
    <View style={styles.container}>


      <DelAddTodos />

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      {/* onSubmitEditing={(e) => (e.nativeEvent.text)} */}
        <TextInput ref={ref => textInputRef.current = ref} style={gloStyles.inputStyle} value={input} onChangeText={(text) => setInput(text)} />
      </View>
      <View style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <TouchableOpacity style={styles.bottomButton} onPress={addTodo}>
          <Text style={styles.bigPlus}>{isFocused ? '+' : '-'}</Text>
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
  bottomButton: {
    backgroundColor: '#016064',
    width: 100,
    height: 100,
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
