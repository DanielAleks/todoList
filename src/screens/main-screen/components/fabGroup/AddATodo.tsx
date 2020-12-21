import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'
import { gloStyles } from '../../../../../App'
import { useDispatch } from 'react-redux'
import { ADD_TODO } from '../../../../reducers/types'
import { DynamicFeather, DynamicFeatherT, DynamicInput, DynamicInputT, PureButton, PureButtonT } from '../../../../reusables/dynamicStuff'

function AddATodo({ setTodoModal }) {
  const [input, setInput] = useState('')
  const [tag, setTag] = useState('')

  const dispatch = useDispatch()

  const addTodo = () =>
    dispatch({ type: ADD_TODO, payload: input })

  const addTag = () => { }

  const featherData: DynamicFeatherT = { onPress: () => setTodoModal(false) }
  const pureButtonData: PureButtonT[] = [
    {
      onPress: addTag,
      textStyle: gloStyles.whiteText,
      text: 'Add Tag',
      buttonStyle: gloStyles.button
    },
    {
      onPress: addTodo,
      textStyle: gloStyles.whiteText,
      text: 'Add Todo',
      buttonStyle: gloStyles.button
    },
  ]
  const collectedData: DynamicInputT[] = [
    {
      value: tag,
      placeholder: "My Tags...",
      onChangeText: (text) => setTag(text),
      name: null,
      textStyle: gloStyles.whiteText
    },
    {
      value: input,
      placeholder: "My Todos...",
      name: null,
      onChangeText: (text) => setInput(text),
      textStyle: gloStyles.whiteText
    }
  ]

  return (
    <Modal transparent={true} visible={true}>
      <View style={gloStyles.modalBg}>
        <View style={styles.absoluteModal}>
          <View style={styles.modalArea}>
            <DynamicFeather featherData={featherData} />

            <Text style={gloStyles.blackText}>Add A Todo:</Text>
            <DynamicInput collectedData={collectedData[1]} />
            <PureButton pureButtonData={pureButtonData[1]} />
            <DynamicInput collectedData={collectedData[0]} />
            <PureButton pureButtonData={pureButtonData[0]} />
          </View>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  absoluteModal: {
    position: 'absolute',
    bottom: '30%',
    right: '20%',
  },
  modalArea: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 300,
    width: 250,
    backgroundColor: '#c43d3d',
  },
})

export default AddATodo
