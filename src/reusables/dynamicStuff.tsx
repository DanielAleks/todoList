import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { TextInput} from 'react-native-gesture-handler'
import { signInStyles } from '../screens/welcome-screen'
import { gloStyles } from '../../App'
import { mainStyles } from '../screens/main-screen'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

export const PureButton = ({ pureButtonData }) => {
  return (
    <TouchableOpacity
      key={pureButtonData.key}
      style={pureButtonData.buttonStyle}
      onPress={pureButtonData.button}
    >
      <Text style={pureButtonData.textStyle}>{pureButtonData.text}</Text>
    </TouchableOpacity>
  )
}

export const DynamicBack = ({ backData }) => {
  return ( 
    <TouchableOpacity onPress={backData.button}>
      <AntDesign style={backData.style} name="back" size={24} color="white" />
    </TouchableOpacity>
  )
}
export const DynamicFeather = ({ featherData }) => {
  return (
    <TouchableOpacity style={gloStyles.x} onPress={featherData.button}>
      <Feather name="x-circle" size={24} color="black" />
    </TouchableOpacity>
  )
}

export const DynamicButtons = ({ buttonData }) => {
  return (
    <View style={buttonData.style}>
      <TouchableOpacity style={buttonData.innerStyle} onPress={buttonData.button}>
        <Text style={buttonData.textStyle}>{buttonData.createAcc}</Text>
      </TouchableOpacity>
    </View>
  )
}

export const DynamicInput = ({ collectedData }) => {
  return (
    <View style={collectedData.viewStyle}>
      <Text style={collectedData.textStyle}>{collectedData.name}</Text>
      <TextInput
        style={gloStyles.inputStyle}
        value={collectedData.value}
        onChangeText={collectedData.onChangeText}
      />
    </View>
  )
}
