import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { gloStyles } from '../../App'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

export interface PureButtonT {
  key?, buttonStyle, onPress, textStyle, text
}
export const PureButton = ({ pureButtonData }: { pureButtonData: PureButtonT }) => {
  return (
    <TouchableOpacity
      key={pureButtonData.key}
      style={pureButtonData.buttonStyle}
      onPress={pureButtonData.onPress}
    >
      <Text style={pureButtonData.textStyle}>{pureButtonData.text}</Text>
    </TouchableOpacity>
  )
}

export interface DynamicBackT {
  onPress, style?
}
export const DynamicBack = ({ backData }: { backData: DynamicBackT }) => {
  return (
    <TouchableOpacity onPress={backData.onPress}>
      <AntDesign style={backData.style} name="back" size={24} color="white" />
    </TouchableOpacity>
  )
}

export interface DynamicFeatherT {
  onPress
}
export const DynamicFeather = ({ featherData }: {featherData: DynamicFeatherT}) => {
  return (
    <TouchableOpacity style={gloStyles.x} onPress={featherData.onPress}>
      <Feather name="x-circle" size={24} color="black" />
    </TouchableOpacity>
  )
}

export interface DynamicButtonsT {
  style, innerStyle, onPress, textStyle, words
}
export const DynamicButtons = ({ buttonData }: {buttonData: DynamicButtonsT}) => {
  return (
    <View style={buttonData.style}>
      <TouchableOpacity style={buttonData.innerStyle} onPress={buttonData.onPress}>
        <Text style={buttonData.textStyle}>{buttonData.words}</Text>
      </TouchableOpacity>
    </View>
  )
}

export interface DynamicInputT {
  viewStyle?, textStyle, name, value, onChangeText
} 
export const DynamicInput = ({ collectedData }: {collectedData: DynamicInputT}) => {
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
