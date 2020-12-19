import React, { useRef, useState } from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet, Modal } from 'react-native'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../../App'
import { ADD_ROOM } from '../../../reducers/types'
import { DynamicFeather, DynamicInput, PureButton } from '../../../reusables/dynamicStuff'
import { mainStyles } from '../../main-screen/index'

function CreateRoom({ setCreateModal }) {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [invite, setInvite] = useState('')

  //! Something wrong with the payload
  const addRoom = (payload) => dispatch({ type: ADD_ROOM, payload })

  const featherData = { button: () => setCreateModal(false) }

  const collectedData = [
    {
      viewStyle: null,
      textStyle: gloStyles.blackText,
      name: 'name',
      value: name,
      onChangeText: (text) => setName(text),
    },
    {
      viewStyle: null,
      textStyle: gloStyles.blackText,
      name: 'invite',
      value: invite,
      onChangeText: (text) => setInvite(text),
    },
  ]
  const pureButtonData = {
    buttonStyle: gloStyles.button,
    textStyle: gloStyles.whiteText,
    onPress: () => addRoom,
    text: 'Create Room'
  }

  return (
    <Modal transparent={true} visible={true}>
      <View style={gloStyles.modalBg}>
        <View style={styles.absoluteModal}>
          <View style={styles.modalArea}>
            <DynamicFeather featherData={featherData} />
            <Text style={mainStyles.header}>Create New Room</Text>
//*Name 
            <DynamicInput collectedData={collectedData[0]} />
//*Invite 
            <DynamicInput collectedData={collectedData[1]} />

//*Create Room 
            <PureButton pureButtonData={pureButtonData} />
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
    right: '15%',
  },
  modalArea: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 300,
    width: 300,
    backgroundColor: '#c43d3d',
  },
})

export default CreateRoom
