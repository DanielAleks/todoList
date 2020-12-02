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

      {modalVisable ?
        <View style={styles.modalContainer}>
       

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.group}>
              <Text style={styles.text}>Jamie's Group</Text>
            </View>
            <View style={styles.group}>
              <Text style={styles.text}>Carl's Group</Text>
            </View>
            <View style={styles.group}>
              <Text style={styles.text}>Jake's Group</Text>
            </View>
            <View style={styles.group}>
              <Text style={styles.text}>Kobi's Group</Text>
            </View>
          </View>

          <TouchableOpacity style={{...styles.longButton, marginBottom: 10}}>
            <Text style={gloStyles.text}>Join Room/Leave</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.longButton}>
            <Text style={gloStyles.text}>Create Room</Text>
          </TouchableOpacity>
        </View>
        :
        <TouchableOpacity style={{ ...gloStyles.button, position: 'absolute', left: 100 }} onPress={() => navigation.navigate("welcome")}>
          <Text style={gloStyles.text}>Welcome Page</Text>
        </TouchableOpacity>
      }
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
  modalContainer: {
    backgroundColor: 'black', 
    width: '100%', 
    height: 800, 
    position: 'absolute', 
    top: 0,
    display: 'flex', 
    marginTop: 100
  },
  specificButton: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    right: '0',
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
  longButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#70b8fc'
  },
  group: {
    alignItems: 'center', 
    marginTop: 10,
    width: '100%',
    backgroundColor: '#a7a7a7'
  }

});

export default Navbar
