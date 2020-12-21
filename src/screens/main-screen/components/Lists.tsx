import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { gloStyles } from '../../../../App'
import { rootStoreT } from '../../../../store'
import { ADD_LIST, ADD_TODO, REMOVE_LIST, REMOVE_TODO } from '../../../reducers/types'
import DelAddTodos from './DelAddTodos'
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { DynamicInput, DynamicInputT, PureButton, PureButtonT } from '../../../reusables/dynamicStuff'

function Lists({ editMode, item }) {
  const todos = useSelector((state: rootStoreT) => state.todos)
  const [isDropped, setIsDropped] = useState<any>([])
  const [addTodo, setAddTodo] = useState([])
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const removeList = (payload) => dispatch({ type: REMOVE_LIST, payload })
  const createTodo = () => dispatch({ type: ADD_TODO, payload: value })

  const pureButtonData: PureButtonT[] = [
    {
      key: item.id,
      onPress: () => setIsDropped(item.id),
      buttonStyle: styles.group,
      textStyle: gloStyles.whiteText,
      text: item.value,
    },
    {
      onPress: createTodo,
      buttonStyle: gloStyles.button,
      textStyle: gloStyles.whiteText,
      text: 'Add Todo',
    },
    {
      onPress: () => setIsDropped(item.id),
      buttonStyle: styles.dontKnowStyles,
      textStyle: gloStyles.whiteText,
      text: 'X',
    }
  ]

  const collectedData: DynamicInputT = {
    textStyle: gloStyles.blackText,
    value: value,
    onChangeText: (text) => setValue(text),
    name: null,
  }

  return (
    <View key={item.id}>
      <View>
        <PureButton pureButtonData={pureButtonData[0]} />
        <DynamicInput collectedData={collectedData} />

        <PureButton pureButtonData={pureButtonData[1]} />
        {editMode ? <PureButton pureButtonData={pureButtonData[2]} /> : null}

        <View style={{
          ...gloStyles.blackText, ...styles.delTodosContainer,
          display: isDropped === item.id ? 'flex' : 'none'
        }}>
          {todos.map((item) =>
            <DelAddTodos item={item} />
          )}
        </View>
      </View>
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
