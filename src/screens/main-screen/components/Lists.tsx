import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { gloStyles } from '../../../../App'
import { rootStoreT } from '../../../../store'
import { ADD_LIST, ADD_TODO, REMOVE_LIST, REMOVE_TODO } from '../../../reducers/types'
import DelAddTodos from './DelAddTodos'
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { PureButton, PureButtonT } from '../../../reusables/dynamicStuff'

function Lists({ editMode, item }) {
  const todos = useSelector((state: rootStoreT) => state.todos)
  const [isDropped, setIsDropped] = useState<any>([])
  const [addTodo, setAddTodo] = useState([])
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const removeList = (payload) => dispatch({ type: REMOVE_LIST, payload })
  const addList = (payload) => dispatch({ type: ADD_LIST, payload })

  const createTodo = (payload) => dispatch({ type: ADD_TODO, payload })
  const deleteTodo = (payload) => dispatch({ type: REMOVE_TODO, payload })

  const pureButtonData: PureButtonT = {
    key: item.id,
    onPress: () =>
      isDropped === '' ? setIsDropped(item.id) : setIsDropped(''),
    buttonStyle: styles.group,
    textStyle: gloStyles.whiteText, 
    text: item.value,
  }

  return (
    <View>
      <View key={item.id}>
        <PureButton pureButtonData={pureButtonData} />
        <TextInput
          style={gloStyles.button}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <TouchableOpacity style={gloStyles.button} onPress={createTodo}>
          <Text>Add Todo</Text>
        </TouchableOpacity>
        {addTodo.map((itemTodo) => (
          <TouchableOpacity onPress={deleteTodo}>
            <Text>{itemTodo}</Text>
          </TouchableOpacity>
        ))}
          //TODO: Organize everything then come back when your mind is fresh
          <TouchableOpacity style={{...styles.dontKnowStyles, display: editMode ? 'flex' : 'none'  }} onPress={ removeList }>
            <Text>X</Text>
            </TouchableOpacity>
        <View
          style={{
            ...gloStyles.blackText,
            ...styles.delTodosContainer,
            display: isDropped === item.id ? 'flex' : 'none',
          }}
        >
          {todos.map((item) =>
            <DelAddTodos item={item} />
          )}
        </View>
      </View>
      ))
    </View>
  )
}
const styles = StyleSheet.create({
  group: {
    borderColor: 'white',
    backgroundColor: '#222222',
    height: 30,
    justifyContent: 'center',
    width: '100%',
    borderWidth: 0.25,
    // flexDirection: 'row',
  },
  delTodosContainer: {
    height: '80%',
    backgroundColor: '#afafaf',
  },
  dontKnowStyles: {
    width: 110,
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Lists
