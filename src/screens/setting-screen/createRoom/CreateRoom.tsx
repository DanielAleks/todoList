import React, { useEffect, useRef, useState } from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet, Modal } from 'react-native'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../../App'
import { ADD_ROOM } from '../../../reducers/types'
import { DynamicFeather, DynamicFeatherT, DynamicInput, DynamicInputT, PureButton, PureButtonT } from '../../../reusables/dynamicStuff'
import { mainStyles } from '../../main-screen/index'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'

function CreateRoom({ setCreateModal }) {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [invite, setInvite] = useState('')
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
    !animationPlay ? setTimeout(() => setCreateModal(false), 400) : setCreateModal(true)
  }, [animationPlay])

  return (
    <Modal
      transparent={true}
      visible={true}
      animationType="fade"
      onRequestClose={() => setCreateModal(false)}
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

          <TextInput
            ref={inputRef}
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.inputStyle}
            placeholderTextColor='#818181'
            placeholder='Name of the new room...'
          />

          <TextInput
            value={invite}
            onChangeText={(text) => setInvite(text)}
            style={styles.inputStyle}
            placeholderTextColor='#818181'
            placeholder='Invite my best freind...'
          />

          <View style={{ width: '70%', alignSelf: 'flex-start', marginTop: 10, marginLeft: 20 }}>
            <Text style={{ fontSize: 18, color: '#4f9dc7' }}>People Invited:</Text>
            <Text style={{ fontSize: 12, color: '#858585' }}>Gary Vee, John Dep</Text>
          </View>

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
    height: 200,
    width: 300,
    backgroundColor: '#272727',
  },
  inputStyle: {
    marginTop: 12,
    width: '100%',
    height: 50,
    marginLeft: 10,
    fontSize: 18,
    fontFamily: 'Nunito',
    backgroundColor: '#2b2b2b'
  },
  submitButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 20
  },
})

export default CreateRoom
