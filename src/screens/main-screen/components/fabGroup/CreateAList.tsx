import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View, Modal, Text, TouchableOpacity } from 'react-native'
import { gloStyles } from '../../../../../App'
import { ADD_LIST } from '../../../../reducers/types'
import { useDispatch } from 'react-redux'
import { PureButton, PureButtonT } from '../../../../reusables/dynamicStuff'
import { LinearGradient } from 'expo-linear-gradient'
import { TextInput } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable'
import { MaterialCommunityIcons } from '@expo/vector-icons';

function CreateAList({ setCreateListModal }) {
  const [input, setInput] = useState('')
  const [animationPlay, setAnimationPlay] = useState(true)
  const inputRef: any = useRef('')

  const dispatch = useDispatch()

  const addList = () =>
    dispatch({ type: ADD_LIST, payload: input })
  // dispatch(addListAction({ username, password }))

  const pureButtonData: PureButtonT = {
    onPress: addList,
    textStyle: gloStyles.blackText,
    buttonStyle: styles.submitButton,
    text: <MaterialCommunityIcons name="arrow-right-bold-circle-outline" size={40} color="#06b3df" />,
  }

  useEffect(() => {
    inputRef.current.focus()
    !animationPlay ? setTimeout(() => setCreateListModal(false), 400) : setCreateListModal(true)
  }, [animationPlay])

  return (
    <Modal
      transparent={true}
      visible={true}
      animationType="fade"
      onRequestClose={() => setCreateListModal(false)}>

      <TouchableOpacity
        onPress={() => {
          setAnimationPlay(false)
          !animationPlay ? setCreateListModal(false) : setCreateListModal(true)
        }}
        style={{ ...styles.overlayStyles, ...gloStyles.modalBg }}
      ></TouchableOpacity>


      <Animatable.View
        animation={animationPlay ? 'bounceInRight' : 'bounceOutRight'}
        duration={600}
        easing='ease-out'
        iterationCount={1}
        style={styles.container}
      >
        <TextInput style={styles.inputStyle} />
        <TextInput
          ref={inputRef}
          value={input}
          onChangeText={(text) => setInput(text)}
          style={styles.inputStyle}
          placeholder='My New List for Todos...'
          placeholderTextColor='#818181'
        />

        <PureButton pureButtonData={pureButtonData} />

      </Animatable.View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272727',
    width: 300,
    height: 80,
    top: 200,
    alignSelf: 'flex-end',
    borderRadius: 5,
  },
  submitButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 15
  },
  inputStyle: {
    marginLeft: 10,
    width: '100%',
    fontSize: 18,
    fontFamily: 'Nunito',
  },
  absoluteModal: {
    position: 'absolute',
    bottom: '50%',
    right: '20%',
  },
  overlayStyles: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  modalArea: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 150,
    width: 250,
    backgroundColor: '#272727',
  },
})

export default CreateAList
