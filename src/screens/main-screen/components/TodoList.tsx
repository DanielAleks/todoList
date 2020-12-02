import React, { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { gloStyles } from '../../../../App'
import { rootStoreT } from '../../../../store'
import { ADD_TODO } from '../../../reducers/types'
import ListOfTodos from './ListOfTodos'


function TodoList() {
  const [input, setInput] = useState<any>('')
  const dispatch = useDispatch()

  const addTodo = () => {
    dispatch({type: ADD_TODO, payload: input })
  }
  

  return (
    <View style={styles.container}>


      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <TextInput style={styles.inputStyle} value={input} onChangeText={(text) => setInput(text)} />
      </View>
      <ListOfTodos/>
      <View>
        <TouchableOpacity style={styles.bottomButton} onPress={addTodo}>
          <Text>add</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  },
  inputStyle: {
    backgroundColor: 'white',
    width: 100,
  },
  // todoBox: {
  //   backgroundColor: 'red',
  //   height: 100,
  //   width: 100,
  // },
  bottomButton: {
    backgroundColor: '#b41054',
    width: 120,
    height: 120,
    borderRadius: 1001,
    alignItems: 'flex-end'

  }

})

export default TodoList
