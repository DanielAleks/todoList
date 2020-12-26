import React, { useState } from 'react'
import { View, StyleSheet, Modal, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native'
import { } from 'react-native-gesture-handler'
import { gloStyles } from '../../../../../App'
import { DynamicFeather, DynamicFeatherT, PureButton, PureButtonT } from '../../../../reusables/dynamicStuff'

function SettingsModal({ setModalSettings }) {
  const [groupName, setGroupName] = useState('')

  const featherData: DynamicFeatherT = { onPress: () => setModalSettings(false) }

  const pureButtondata: PureButtonT[] = [
    {
      onPress: null,
      textStyle: gloStyles.whiteText,
      buttonStyle: styles.button,
      text: 'Leave Room',
    },
    {
      onPress: null,
      textStyle: gloStyles.whiteText,
      buttonStyle: styles.button,
      text: 'Rename',
    },
    {
      onPress: null,
      textStyle: gloStyles.whiteText,
      buttonStyle: styles.button,
      text: 'Urgent Tasks',
    }
  ]

  return (
    <Modal
      transparent={true}
      visible={true}
      animationType="fade"
      onRequestClose={() => setModalSettings(false)}
    >
      <TouchableOpacity
        onPress={() => { setModalSettings(false) }}
        style={styles.overlayStyles}
      >
      </TouchableOpacity>

      <View style={styles.container}>
        <PureButton pureButtonData={pureButtondata[0]} />
        <PureButton pureButtonData={pureButtondata[1]} />
        <PureButton pureButtonData={pureButtondata[2]} />
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272727',
    width: 150,
    height: 150,
    top: 5,
    left: 255,
    borderRadius: 5,
  },
  overlayStyles: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  button: {
    height: 50,
    width: '100%',
    borderWidth: .25,
    borderColor: '#5c5b5b',
    color: 'red',
    justifyContent: 'center',
    paddingLeft: 15
  },
  editNameContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default SettingsModal