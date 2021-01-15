import React, { useEffect, useRef, useState } from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet, Modal } from 'react-native'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../../App'
import { ADD_ROOM } from '../../../reducers/types'
import { DynamicFeather, DynamicFeatherT, DynamicInput, DynamicInputT, PureButton, PureButtonT } from '../../../reusables/dynamicStuff'
import { mainStyles } from '../../main-screen/index'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'

function ModalJoin({ setJoinModal }) {
  const dispatch = useDispatch()
  const [roomKey, setRoomKey] = useState('')
  const [animationPlay, setAnimationPlay] = useState(true)
  const inputRef: any = useRef('')

  const addRoom = () =>
    dispatch({ type: ADD_ROOM, payload: name })

  const pureButtonData: PureButtonT = {
    buttonStyle: styles.submitButton,
    textStyle: gloStyles.whiteText,
    onPress: () => addRoom(),
    text: <MaterialCommunityIcons name="arrow-right-bold-circle-outline" size={40} color="#06b3df" />,
  }

  useEffect(() => {
    inputRef.current.focus()
    !animationPlay ? setTimeout(() => setJoinModal(false), 400) : setJoinModal(true)
  }, [animationPlay])

  return (
    <Modal
      transparent={true}
      visible={true}
      animationType="fade"
      onRequestClose={() => setJoinModal(false)}
    >

      <TouchableOpacity
        onPress={() => { setAnimationPlay(prev => !prev) }}
        style={{ ...gloStyles.overlayStyles, ...gloStyles.modalBg }}
      ></TouchableOpacity>

      <Animatable.View
        animation={animationPlay ? 'bounceInRight' : 'bounceOutRight'}
        duration={600}
        easing='ease-out'
        iterationCount={1}
        style={styles.absoluteModal}
      >
        <View style={styles.modalArea}>

          <Text style={{ alignSelf: 'flex-start', marginLeft: 20, fontSize: 20, color: '#b1b1b1', marginTop: 20, fontWeight: 'bold' }}>Enter Room Key:</Text>
          <TextInput
            ref={inputRef}
            value={roomKey}
            onChangeText={(text) => setRoomKey(text)}
            style={styles.inputStyle}
            placeholderTextColor='#818181'
            placeholder='Room Key...'
          />

          <PureButton pureButtonData={pureButtonData} />
        </View>
      </Animatable.View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  absoluteModal: {
    alignSelf: 'flex-end',
    top: 100
  },
  modalArea: {
    alignItems: 'center',
    borderRadius: 10,
    height: 130,
    width: 300,
    backgroundColor: '#272727',
  },
  inputStyle: {
    alignSelf: 'flex-start',
    marginTop: 12,
    width: '70%',
    height: 50,
    marginLeft: 20,
    fontSize: 18,
    fontFamily: 'Nunito',
  },
  submitButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 20
  },
})
export default ModalJoin
