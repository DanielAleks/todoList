import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { gloStyles } from '../../../../App'
import { rootStoreT } from '../../../../store'
import { ADD_TODO, REMOVE_LIST, REMOVE_TODO } from '../../../reducers/types'
import DelAddTodos from './DelAddTodos'
import { DynamicInput, DynamicInputT, PureButton, PureButtonT } from '../../../reusables/dynamicStuff'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Lists({ listItem, listOpenById, setListOpenById, editMode }) {
  // const todos = useSelector((state: rootStoreT) => state.todos)
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const [listOfTodos, setListOfTodos] = useState([])

  const removeList = (payload) => dispatch({ type: REMOVE_LIST, payload })

  const pureButtonData: PureButtonT[] = [
    {
      key: listItem.id,
      onPress: () => listOpenById === listItem.id ? setListOpenById(null) : setListOpenById(listItem.id),
      buttonStyle: styles.group,
      textStyle: gloStyles.whiteText,
      text: listItem.value,
    },
    {
      onPress: () => setListOfTodos(prev => [...prev, { value: value, id: Math.floor(Math.random() * 10000) }]),
      buttonStyle: gloStyles.button,
      textStyle: gloStyles.whiteText,
      text: 'Add Todo',
    },
    {
      onPress: () => removeList(listItem.id),
      buttonStyle: styles.GiantX,
      textStyle: gloStyles.whiteText,
      text: 'X',
    },
  ]

  const collectedData: DynamicInputT = {
    textStyle: gloStyles.blackText,
    value: value,
    onChangeText: (text) => setValue(text),
    name: null,
  }

  return (
    <View >

      <PureButton pureButtonData={pureButtonData[2]} />
      <PureButton pureButtonData={pureButtonData[0]} />

      <View style={{ display: listOpenById === listItem.id ? 'flex' : 'none', ...styles.listContainer}}>

        <DynamicInput collectedData={collectedData} />
        <PureButton pureButtonData={pureButtonData[1]} />



        <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
          {listOfTodos.map((item) =>
            <DelAddTodos setListOfTodos={setListOfTodos} key={item.id} item={item} />
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
  },
  listContainer: {
    backgroundColor: '#afafaf',
    paddingBottom: 100
  },
  GiantX: {
    width: 150,
    height: 30,
    right: 0,
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Lists
