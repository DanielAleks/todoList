import React, { useState } from 'react'
import { Text, View, Modal, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { gloStyles } from '../../../../../App'
import { DynamicFeather, DynamicFeatherT, DynamicInput, DynamicInputT, PureButton, PureButtonT } from '../../../../reusables/dynamicStuff'

function RoomNameModal({ setModalRoomName }) {
  const [groupName, setGroupName] = useState('')

  const featherData: DynamicFeatherT = { onPress: () => setModalRoomName(false) }
  const collectedData: DynamicInputT = {
    value: groupName,
    placeholder: 'new group name...',
    name: null,
    textStyle: gloStyles.blackText,
    onChangeText: (text) => setGroupName(text),
  }

  const pureButtondata: PureButtonT = {
    onPress: () => setModalRoomName(false),
    textStyle: gloStyles.whiteText,
    buttonStyle: gloStyles.button,
    text: 'submit',
  }

  return (
    <Modal transparent={true} visible={true}>
      <View style={gloStyles.modalBg}>
        <View style={styles.container}>
          <DynamicFeather featherData={featherData} />
          
          <View style={styles.editNameContainer}>
            <DynamicInput collectedData={collectedData} />
            <PureButton pureButtonData={pureButtondata} />
          </View>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c43d3d',
    width: 250,
    height: 100,
    top: 100,
    left: '25%',
    borderRadius: 5,
    display: 'flex',
  },
  editNameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default RoomNameModal
