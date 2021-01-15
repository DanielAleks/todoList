import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import { gloStyles } from '../../../../../App'
import { useDispatch } from 'react-redux'
import { ADD_TODO } from '../../../../reducers/types'
import { DynamicFeather, DynamicFeatherT, DynamicInput, DynamicInputT, PureButton, PureButtonT } from '../../../../reusables/dynamicStuff'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'

function AddATodo({ setTodoModal, todoModal }) {
  const [input, setInput] = useState('')
  const [tag, setTag] = useState('')
  const [animationPlay, setAnimationPlay] = useState(true)
  const inputRef: any = useRef('')

  const dispatch = useDispatch()

  const addTodo = () =>
    dispatch({ type: ADD_TODO, payload: input })

  const addTag = () => { }

  const featherData: DynamicFeatherT = { onPress: () => setTodoModal(false) }
  const pureButtonData: PureButtonT = {
    onPress: addTodo,
    textStyle: gloStyles.blackText,
    text: <MaterialCommunityIcons name="arrow-right-bold-circle-outline" size={40} color="#06b3df" />,
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

  useEffect(() => {
    inputRef.current.focus()
    !animationPlay ? setTimeout(() => setTodoModal(false), 400) : setTodoModal(true)
  }, [animationPlay])

  return (
    <Modal
      transparent={true}
      visible={true}
      animationType="fade"
      onRequestClose={() => setTodoModal(false)}>

      <TouchableOpacity
        onPress={() => { setAnimationPlay(prev => !prev) }}
        style={{ ...gloStyles.overlayStyles, ...gloStyles.modalBg }}
      ></TouchableOpacity>

      <Animatable.View
        animation={animationPlay ? 'bounceInRight' : 'bounceOutRight'}
        duration={600}
        easing='ease-out'
        iterationCount={1}
        style={styles.container}
      >

        <TextInput
          ref={inputRef}
          value={input}
          onChangeText={(text) => setInput(text)}
          style={styles.inputStyle}
          placeholder='Finishing Project by Midnight...'
          placeholderTextColor='#818181'
        />

        <View style={{ justifyContent: 'center', marginVertical: 10, width: '100%', alignContent: 'center', alignSelf: 'center', }}>
          <View style={{ flexDirection: 'row' }}>
            <TextInput style={{ width: 320, backgroundColor: '#2c2c2c', height: 30, alignSelf: 'center' }} />

            <Animatable.View
              animation='pulse'
              easing='ease-out'
              iterationCount='infinite'
            >
              <TouchableOpacity
                // onPress={() => }
                style={styles.button}
              >
                <AntDesign name="tags" size={30} color="#d6d6d6" />
              </TouchableOpacity>
            </Animatable.View>


          </View>

          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <TextInput style={{ width: 320, backgroundColor: '#2c2c2c', height: 30, alignSelf: 'center' }} />

            <TouchableOpacity style={styles.button}>
              <AntDesign name="calendar" size={30} color="#d6d6d6" />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <TouchableOpacity onPress={null} style={styles.button}>
              <AntDesign name="staro" size={30} color="#d6d6d6" />
            </TouchableOpacity>
            <TouchableOpacity onPress={null} style={styles.button}>
              <AntDesign name="staro" size={30} color="#d6d6d6" />
            </TouchableOpacity>
            <TouchableOpacity onPress={null} style={styles.button}>
              <AntDesign name="staro" size={30} color="#d6d6d6" />
            </TouchableOpacity>
            <TouchableOpacity onPress={null} style={styles.button}>
              <AntDesign name="staro" size={30} color="#d6d6d6" />
            </TouchableOpacity>
            <TouchableOpacity onPress={null} style={styles.button}>
              <AntDesign name="staro" size={30} color="#d6d6d6" />
            </TouchableOpacity>

            <TouchableOpacity onPress={addTag} style={{ alignSelf: 'center', marginLeft: 34 }}>
              <FontAwesome name="star-half-full" size={30} color="#d6d6d6" />
            </TouchableOpacity>
          </View>
        </View>

        <PureButton pureButtonData={pureButtonData} />
      </Animatable.View>
    </Modal >
  )
}
const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 12,
    width: '100%',
    height: 50,
    marginLeft: 10,
    fontSize: 18,
    fontFamily: 'Nunito',
  },
  container: {
    backgroundColor: '#272727',
    width: '90%',
    height: 350,
    top: 80,
    alignSelf: 'flex-end',
    borderRadius: 5,
    marginRight: -5
  },
  submitButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginHorizontal: 15
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
