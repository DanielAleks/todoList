import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import { gloStyles } from '../../../../../App'
import { useDispatch } from 'react-redux'
import { ADD_TODO } from '../../../../reducers/types'
import { DynamicFeather, DynamicFeatherT, DynamicInput, DynamicInputT, PureButton, PureButtonT } from '../../../../reusables/dynamicStuff'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler'

function AddATodo({ setTodoModal }) {
  const [input, setInput] = useState('')
  const [tag, setTag] = useState('')

  const dispatch = useDispatch()

  const addTodo = () =>
    dispatch({ type: ADD_TODO, payload: input })

  const addTag = () => { }

  const featherData: DynamicFeatherT = { onPress: () => setTodoModal(false) }
  const pureButtonData: PureButtonT = {
    onPress: addTodo,
    textStyle: gloStyles.blackText,
    text: 'Add Todo',
    buttonStyle: styles.submitButton,
  }

  const collectedData: DynamicInputT[] = [
    {
      value: tag,
      onChangeText: (text) => setTag(text),
      name: null,
      textStyle: gloStyles.whiteText
    },
    {
      value: input,
      name: 'Add A Todo:',
      onChangeText: (text) => setInput(text),
      textStyle: gloStyles.whiteText
    }
  ]

  return (
    <Modal transparent={true} visible={true} animationType="fade"
      onRequestClose={() => setTodoModal(false)}>

      <TouchableOpacity
        onPress={() => { setTodoModal(false) }}
        style={{ ...styles.overlayStyles, ...gloStyles.modalBg }}
      ></TouchableOpacity>

      <View style={styles.container}>
        <Text style={{ ...gloStyles.whiteText, marginTop: 10, marginLeft: 10 }}>Add A Todo:</Text>
        <TextInput value={input} style={styles.inputStyle} onChangeText={(text) => setInput(text)} />

        <View style={{ justifyContent: 'center', marginVertical: 10, flexDirection: 'row', width: '100%' }}>
          <LinearGradient
            style={{ borderRadius: 100, width: 60, height: 40, marginHorizontal: 10 }}
            colors={['#e4e1e1',
              '#ccc9c9']}
            start={[0, 0]}>
            <TouchableOpacity style={styles.button}>
              <Text style={{ fontSize: 20 }}>
                +
                  <AntDesign name="tags" size={24} color="black" />
              </Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            style={{ borderRadius: 100, width: 60, height: 40, marginHorizontal: 10 }}
            colors={['#e4e1e1',
              '#ccc9c9']}
            start={[0, 0]}>
            <TouchableOpacity onPress={addTag} style={styles.button}>
              <Text style={{ fontSize: 20 }}>
                +
                  <FontAwesome name="star-half-full" size={24} color="black" />
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <LinearGradient
          style={{ borderRadius: 5, width: 100, height: 30, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
          colors={['#e4e708',
            '#dfad08',]}
          start={[0, 0]}
        >
          <PureButton pureButtonData={pureButtonData} />
        </LinearGradient>
      </View>
    </Modal >
  )
}
const styles = StyleSheet.create({
  inputStyle: {
    width: 150,
    borderBottomWidth: 1,
    borderBottomColor: '#bbbbbb',
    borderRadius: 4,
  },
  container: {
    backgroundColor: '#272727',
    width: 200,
    height: 200,
    top: 200,
    alignSelf: 'center',
    borderRadius: 5,
  },
  submitButton: {
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  overlayStyles: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  modalArea: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 300,
    width: 250,
    backgroundColor: '#424242',
  },
})

export default AddATodo
