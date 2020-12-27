import React, { useState } from 'react'
import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { gloStyles } from '../../../../../App'
import { PureButton } from '../../../../reusables/dynamicStuff'

function InviteSettings({ setInviteCogModal }) {
  const [addChecked, setAddChecked] = useState(false)
  const [editChecked, setEditChecked] = useState(false)


  return (
    <View>
      <Modal
        transparent={true}
        visible={true}
        animationType="fade"
        onRequestClose={() => setInviteCogModal(false)}
      >
        <TouchableOpacity
          onPress={() => { setInviteCogModal(false) }}
          style={{...styles.overlayStyles, ...gloStyles.modalBg}}
        >
        </TouchableOpacity>

        <View style={styles.container}>
          <Text style={{ marginTop: 15, marginBottom: 20, alignSelf: 'center', color: '#c0c0c0', fontSize: 17 }}>Share with People Settings</Text>
          <TouchableOpacity onPress={() => setAddChecked(prev => !prev)}>
            <Checkbox.Item label="Anyone can add or delete todos" status={!addChecked ? 'checked' : 'unchecked'} labelStyle={{ color: '#868686', fontFamily: 'Nunito', fontSize: 14 }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setEditChecked(prev => !prev)}>
            <Checkbox.Item label="Anyone can edit others todos" status={!editChecked ? 'checked' : 'unchecked'} labelStyle={{ color: '#868686', fontFamily: 'Nunito', fontSize: 14 }} />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272727',
    width: 300,
    height: 165,
    top: 210,
    alignSelf: 'center',
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

export default InviteSettings
