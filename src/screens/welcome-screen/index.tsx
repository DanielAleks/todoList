import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { gloStyles } from '../../../App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const WelcomeScreen = () => {
  const navigation = useNavigation()
  
  return (
    <View>

      {/* <TouchableOpacity style={gloStyles.button} onPress={() => navigation.navigate("main")}>
        <Text></Text>
      </TouchableOpacity> */}
      <SignUp />
      <SignIn />
    </View>
  )
}

export default WelcomeScreen
