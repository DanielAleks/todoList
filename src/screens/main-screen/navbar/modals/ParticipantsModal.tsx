import React, { useState } from 'react'
import { Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import { gloStyles } from '../../../../../App'
import { DynamicFeather, DynamicFeatherT, DynamicInput, DynamicInputT, PureButton, PureButtonT } from '../../../../reusables/dynamicStuff'
import { Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

function ParticipantsModal({ setModalParticipants, setInviteCogModal }) {
  const [people, setPeople] = useState('')

  const featherData: DynamicFeatherT = { onPress: () => setModalParticipants(false) }

  const pureButtonData: PureButtonT = {
    onPress: () => setPeople('fix'),
    buttonStyle: null,
    textStyle: gloStyles.blackText,
    text: 'Invite',
  }

  return (
    <Modal
      transparent={true}
      visible={true}
      animationType="fade"
      onRequestClose={() => setModalParticipants(false)}
    >
      <TouchableOpacity
        onPress={() => { setModalParticipants(false) }}
        style={{ ...styles.overlayStyles, ...gloStyles.modalBg }}
      ></TouchableOpacity>

      <View style={styles.container}>
        {/* <DynamicFeather featherData={featherData} /> */}

        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text style={styles.header}>Invite Others to the Group</Text>
          <TouchableOpacity onPress={() => setInviteCogModal(prev => !prev)}>
            <Entypo name="cog" size={24} color="#000000" />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 20, alignSelf: 'center' }}>
          <TextInput
            value={people}
            placeholder={'invite others'}
            placeholderTextColor='#b8b3b3'
            onChangeText={(text) => setPeople(text)}
            style={{
              height: 40,
              marginRight: 10,
              width: 150,
              borderBottomWidth: 1,
              borderBottomColor: '#1a0b0b',
              borderRadius: 4,
            }}
          />

          <LinearGradient
            style={{ borderRadius: 5, width: 100, height: 30, justifyContent: 'center', alignItems: 'center' }}
            colors={['#e4e708',
              '#dfad08',]}
            start={[0, 0]}
          >
            <PureButton pureButtonData={pureButtonData} />
          </LinearGradient>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ alignSelf: 'center', fontFamily: 'Nunito', color: '#999999', fontSize: 12 }}>Members:</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 14, fontFamily: 'Nunito', color: '#f0f0f0', alignSelf: 'center' }}>{people} Daniel Aleksandrov, Tyler G., </Text>
          </TouchableOpacity>
          {/* //? Should add a feature where the names are colored in each room */}
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272727',
    width: 300,
    height: 200,
    top: 200,
    alignSelf: 'center',
    borderRadius: 5,
  },
  header: {
    fontSize: 18,
    fontFamily: 'Nunito',
    color: '#f5f5f5',
    marginRight: 20,
    marginLeft: 10,
  },
  overlayStyles: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  modalArea: {
    backgroundColor: '#c43d3d',
    width: 250,
    height: 200,
    top: 200,
    left: '25%',
    borderRadius: 5,
  },
})

export default ParticipantsModal
