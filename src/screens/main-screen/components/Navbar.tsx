import { BaseNavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { gloStyles } from '../../../../App';
import signUpAction from '../../../actions/signUpAction';

function Navbar() {
  const [modalVisable, setModalVisable] = useState(false)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const modalToggle = () => {
    setModalVisable(prev => !prev)
  }





  return (
    <View style={styles.container}>

      <TouchableOpacity style={{ ...gloStyles.button, position: 'absolute', right: 0 }} onPress={modalToggle}>
        <Text style={gloStyles.text}>...</Text>
      </TouchableOpacity>

     
      
      <TouchableOpacity style={{ ...gloStyles.button, position: 'absolute', left: 100}} onPress={() => navigation.navigate("welcome")}>
        <Text style={gloStyles.text}>Go Back</Text>
      </TouchableOpacity>


      <View style={{ display: modalVisable ? 'flex' : 'none' }}>
        <TouchableOpacity style={gloStyles.button}>
          <Text style={gloStyles.text}>Join Room/Leave</Text>
        </TouchableOpacity>

        <TouchableOpacity style={gloStyles.button}>
          <Text style={gloStyles.text}>Create Room</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#016064',
    position: 'absolute',
    top: 0,
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  specificButton: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    right: '0',
  }

});

export default Navbar
