import React, { useState } from 'react'
import { Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import { gloStyles } from '../../../../../App'
import { Feather } from '@expo/vector-icons'
import { DynamicFeather } from '../../../../reusables/dynamicStuff'

function ParticipantsModal({ setModalParticipants }) {
  const [people, setPeople] = useState('')

  const featherData = { button: () => setModalParticipants(false) }

  return (
    <Modal transparent={true} visible={true}>
      <View style={gloStyles.modalBg}>
        <View style={styles.container}>
          <View style={styles.modalArea}>
            <DynamicFeather featherData={featherData} />

            <Text>People in blank group</Text>
            <Text style={styles.text}>{people} people...</Text>

            <View style={styles.bothButtons}>
              
              <TouchableOpacity style={styles.button} onPress={() => setPeople('fix')}>
                <Text style={{ color: 'white' }}>Add</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ ...styles.button, marginLeft: 10 }}
                onPress={() => setPeople('fix')}
              >
                <Text style={{ color: 'white' }}>Remove</Text>
              </TouchableOpacity>
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
  text: {
    marginTop: 10,
    marginLeft: 20,
  },

  button: {
    height: 30,
    width: 100,
    backgroundColor: '#383838',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ParticipantsModal
