import React, { useState } from 'react'
import { Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import { gloStyles } from '../../../../../App'
import { Feather } from '@expo/vector-icons'
import { DynamicFeather, DynamicFeatherT, PureButton, PureButtonT } from '../../../../reusables/dynamicStuff'

function ParticipantsModal({ setModalParticipants }) {
  const [people, setPeople] = useState('')

  const featherData: DynamicFeatherT = { onPress: () => setModalParticipants(false) }

  const pureButtonData: PureButtonT[] = [
    {
      onPress: () => setPeople('fix'),
      buttonStyle: gloStyles.button,
      textStyle: gloStyles.whiteText,
      text: 'Add',
    },
    {
      onPress: () => setPeople('fix'),
      buttonStyle: gloStyles.button,
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
              
              <PureButton pureButtonData={pureButtonData[0]} />
              <PureButton pureButtonData={pureButtonData[1]} />
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
