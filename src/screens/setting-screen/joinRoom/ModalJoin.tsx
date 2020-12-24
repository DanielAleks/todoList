import React, { useState } from 'react'
import { Modal, Text, View, StyleSheet } from 'react-native'
import { gloStyles } from '../../../../App'
import { DynamicFeather, DynamicFeatherT, DynamicInput, DynamicInputT, PureButton, PureButtonT } from '../../../reusables/dynamicStuff'

function ModalJoin({ setJoinModal }) {
  const [groupKey, setGroupKey] = useState('')
  
  const featherData: DynamicFeatherT = { onPress: () => setJoinModal(false) }
  const pureButtonData: PureButtonT = 
    {
      onPress: () => setJoinModal(false),
      buttonStyle: gloStyles.button,
      textStyle: gloStyles.whiteText,
      text: 'Search',
    }

    const collectedData: DynamicInputT = 
      {
        textStyle: gloStyles.blackText,
        name: null,
        value: groupKey,
        onChangeText: (text) => setGroupKey(text),
      }

  return (
    <Modal transparent={true} visible={true}>
      <View style={gloStyles.modalBg}>
        <View style={styles.absoluteModal}>
          <View style={styles.modalArea}>
            <DynamicFeather featherData={featherData} />

            <Text style={gloStyles.blackText}>Type in Group Key</Text>
            <DynamicInput collectedData={collectedData}/>
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
    bottom: '50%',
    right: '20%',
  },
  modalArea: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 150,
    width: 250,
    backgroundColor: '#c43d3d',
  },
})
export default ModalJoin
