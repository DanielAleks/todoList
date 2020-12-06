import React from 'react'
import { TextInput, TouchableOpacity, Modal, Text, View } from 'react-native'
import { gloStyles } from '../../../../App'

function ModalJoin({setIsModalVisable}) {
  return (
    <View style={{height: 100}}>
      <Modal
      transparent={true}
      visible={true}
      >
        <View style={{position: 'absolute', bottom: '50%', right: '15%'}}>
          <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 10, height: 200, width: 300, backgroundColor: 'pink' }}>
            <Text style={gloStyles.text}>Type in Group Key</Text>
            <TextInput style={{...gloStyles.inputStyle, margin: 10}}/>

            <TouchableOpacity style={{...gloStyles.button, margin: 0}} onPress={() => setIsModalVisable(false)}>
              <Text style={gloStyles.text}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}
export default ModalJoin
