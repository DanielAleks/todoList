import { BaseNavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { gloStyles } from '../../../../../App';
import signUpAction from '../../../../actions/signUpAction';
import SettingsModal from './SettingsModal';

function Navbar() {
  const navigation = useNavigation()
  const dispatch = useDispatch()


return (
  <View style={styles.container}>

    <View style={{ width: '100%', alignItems: 'flex-end' }}>
      <TouchableOpacity style={{ ...gloStyles.button, }} onPress={() => navigation.navigate('rooms')}>
        <Text style={gloStyles.text}>...</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={{ ...gloStyles.button, position: 'absolute', left: 100 }} >
      <Text style={gloStyles.text}>Welcome Page</Text>
    </TouchableOpacity>
  </View>

)}
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
  text: {
    fontSize: 14,
    color: 'white',
  },
});

export default Navbar
