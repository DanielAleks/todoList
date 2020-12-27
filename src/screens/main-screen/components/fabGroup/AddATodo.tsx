import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import { gloStyles } from '../../../../../App'
import { useDispatch } from 'react-redux'
import { ADD_TODO } from '../../../../reducers/types'
import { DynamicFeather, DynamicFeatherT, DynamicInput, DynamicInputT, PureButton, PureButtonT } from '../../../../reusables/dynamicStuff'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

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
    textStyle: gloStyles.whiteText,
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
      {/* <View style={styles.absoluteModal}>
          <View style={styles.modalArea}> */}
      <View style={styles.container}>
        <DynamicFeather featherData={featherData} />

        <DynamicInput collectedData={collectedData[1]} />

        <View style={{ flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end', width: '100%', marginRight: 30 }}>
          <LinearGradient
            style={{ borderRadius: 100, width: 60, height: 40, marginBottom: 10 }}
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
            style={{ borderRadius: 100, width: 60, height: 40, }}
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
          style={{ borderRadius: 10, width: 100, height: 40, justifyContent: 'center', alignSelf: 'center' }}
          colors={['#f30000',
            '#a30101']}
          start={[0, 0]}>
          <PureButton pureButtonData={pureButtonData} />
        </LinearGradient>
      </View>
    </Modal >
  )
}
const styles = StyleSheet.create({
  absoluteModal: {
    position: 'absolute',
    bottom: '30%',
    right: '20%',
  },
  container: {
    backgroundColor: '#272727',
    width: 200,
    height: 150,
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
