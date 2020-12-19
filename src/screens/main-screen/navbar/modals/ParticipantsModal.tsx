import React, { useState } from 'react'
import { Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import { gloStyles } from '../../../../../App'
import { Feather } from '@expo/vector-icons'
import { DynamicFeather, PureButton } from '../../../../reusables/dynamicStuff'

function ParticipantsModal({ setModalParticipants }) {
  const [people, setPeople] = useState('')

  const featherData = { button: () => setModalParticipants(false) }

  const pureButtonData = [
    {
      button: () => setPeople('fix'),
      textStyle: gloStyles.whiteText,
      text: 'Add',
    },
    {
      button: () => setPeople('fix'),
      textStyle: gloStyles.whiteText,
      text: 'Remove',
    },
  ]

  return (
    <Modal transparent={true} visible={true}>
      <View style={gloStyles.modalBg}>
        <View style={styles.container}>
          <View style={styles.modalArea}>
            <DynamicFeather featherData={featherData} />

            <Text>People in blank group</Text>
            <Text style={styles.marginText}>{people} people...</Text>

            <View style={styles.bothButtons}>
              
              <PureButton pureButtonData={pureButtonData} />
              <PureButton pureButtonData={pureButtonData} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
  },
  modalArea: {
    backgroundColor: '#c43d3d',
    width: 250,
    height: 200,
    top: 200,
    left: '25%',
    borderRadius: 5,
  },
  bothButtons: {
    flexDirection: 'row',
    margin: 20,
  },
  marginText: {
    marginTop: 10,
    marginLeft: 20,
  },
})

export default ParticipantsModal
