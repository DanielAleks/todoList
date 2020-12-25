import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../../App'
import { REMOVE_LIST } from '../../../reducers/types'
import DelAddTodos from './DelAddTodos'
import { DynamicInput, DynamicInputT, PureButton, PureButtonT } from '../../../reusables/dynamicStuff'

function Lists({ listItem, listOpenById, setListOpenById, editMode }) {
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
      {/* <PureButton pureButtonData={pureButtonData[2]} /> */}
      <PureButton pureButtonData={pureButtonData[0]} />

      {listOpenById === listItem.id ?
        <View style={styles.listContainer}>
          <DynamicInput collectedData={collectedData} />
          <PureButton pureButtonData={pureButtonData[1]} />

          <View style={styles.todosContainer}>
            {listOfTodos.map((item) =>
              <DelAddTodos
                key={item.id}
                setListOfTodos={setListOfTodos}
                item={item}
              />
            )}
          </View>
        </View>
        : null}
    </View>
  )
}
const styles = StyleSheet.create({
  group: {
    borderColor: '#7c7c7c',
    backgroundColor: '#272727',
    height: 30,
    justifyContent: 'center',
    width: '100%',
    borderWidth: 0.25,
    borderTopWidth: 0
  },
  todosContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  listContainer: {
    backgroundColor: '#4b4b4b',
    paddingBottom: 100
  },
  GiantX: {
    width: 150,
    height: 30,
    right: 0,
    backgroundColor: '#921313',
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Lists
