import { useNavigation } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native'
import { TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../App'
import { ADD_ROOM, ADD_TODO } from '../../reducers/types'
import RemoveTodos from './components/RemoveTodos'

function Exx() {

    
    
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#dadada',
      flex: 1,
      width: '100%',    },
    bottomButton: {
      backgroundColor: '#016064',
      width: 100,
      height: 100,
      margin: 10,
      borderRadius: 180,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center'
    },
    bigPlus: {
      fontSize: 50,
      color: 'white',
      fontWeight: '100',
    },
  
  })
export default Exx
