import React, { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { gloStyles } from '../../../../App'
import ListOfTodos from './ListOfTodos'

export interface todoObjT {
  input: string
  id: number
}
function TodoList() {
  const [input, setInput] = useState<any>('')

  const [todos, setTodos] = useState<todoObjT[]>([])

  const onPressHandler = () => {
    setTodos(prev => [...prev, { id: Math.floor(Math.random() * 10000), input: input }])
  }

  return (
    <View style={styles.container}>


      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <TextInput style={styles.inputStyle} value={input} onChangeText={(text) => setInput(text)} />
      </View>
      <ListOfTodos todos={todos} setTodos={setTodos} />
      <View>
        <TouchableOpacity style={styles.bottomButton} onPress={onPressHandler}>
          <Text>click meeee</Text>
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
