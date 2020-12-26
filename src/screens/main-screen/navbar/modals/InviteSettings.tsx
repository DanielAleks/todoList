import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { PureButton } from '../../../../reusables/dynamicStuff'

function InviteSettings({ setInviteCogModal }) {
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
          style={styles.overlayStyles}
        >
        </TouchableOpacity>

        <View style={styles.container}>
        </View>
      </Modal>
    </View>
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

export default InviteSettings
