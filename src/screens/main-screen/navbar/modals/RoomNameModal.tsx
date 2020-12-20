import React, { useState } from 'react'
import { Text, View, Modal, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { gloStyles } from '../../../../../App'
import { DynamicFeather, DynamicFeatherT, PureButton, PureButtonT } from '../../../../reusables/dynamicStuff'

function RoomNameModal({ setModalRoomName }) {
  const [groupName, setGroupName] = useState('')

  const featherData: DynamicFeatherT = { onPress: () => setModalRoomName(false) }

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
        </View>

        <View style={styles.editNameContainer}>
          <Text>Edit Your Group Name:</Text>
          <TextInput
            style={{ ...gloStyles.inputStyle }}
            value={groupName}
            placeholder="Group Name..."
            onChangeText={(text) => setGroupName(text)}
          />
          <PureButton pureButtonData={pureButtondata} />
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
