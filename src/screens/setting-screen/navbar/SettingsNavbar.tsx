import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { PureButton, PureButtonT } from '../../../reusables/dynamicStuff'
import RemoveARoom from '../createRoom/RemoveARoom'
import { Entypo } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { navStyles } from '../../main-screen/navbar/Navbar'
import CogModal from './CogModal'

function SettingsNavbar() {
  const navigation: any = useNavigation()
  const [isCogModal, setIsCogModal] = useState(false)

  const pureButtonData: PureButtonT[] = [
    {
      onPress: () => setIsCogModal(prev => !prev),
      buttonStyle: null,
      textStyle: null,
      text: <Entypo name="dots-three-vertical" size={19} color="black" />,
    },
    {
      onPress: () => navigation.openDrawer(),
      buttonStyle: null,
      textStyle: null,
      text: <Feather name="menu" size={24} color="black" />,
    },
  ]

  return (
    <View>
      <View style={navStyles.container}>

        {isCogModal ? <CogModal setIsCogModal={setIsCogModal} /> : null}

        <View style={navStyles.sandwich}>
          <PureButton pureButtonData={pureButtonData[1]} />
          <Text style={{ ...navStyles.text, textDecorationLine: 'underline' }}>My Rooms: </Text>
        </View>

        <View style={navStyles.settings}>
          <PureButton pureButtonData={pureButtonData[0]} />
        </View>
      </View>
    </View>

  )
}

export default SettingsNavbar
