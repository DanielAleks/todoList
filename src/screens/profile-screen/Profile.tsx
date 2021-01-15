import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { gloStyles } from '../../../App'

function Profile() {
  return (
    <View style={{ backgroundColor: '#302f2f', height: '100%' }}>
      <Image style={styles.imgBg} source={require('../../../assets/background.jpg')} />
      <Image style={styles.img} source={require('../../../assets/manWithCamera.jpg')} />
      <StatusBar backgroundColor="black" style="light" />

      <View style={{ marginTop: 30, width: '80%', alignSelf: 'center' }}>
        <Text style={{ fontFamily: 'Nunito', fontSize: 22, fontStyle: 'italic', fontWeight: 'bold', alignSelf: 'center', color: 'white' }}>Daniel Aleksandrov</Text>

        <Text style={{ fontSize: 16, color: 'white', marginLeft: 20, marginTop: 30, marginBottom: 10, fontFamily: 'Nunito' }}>
          Bio:
        </Text>
        <Text style={{ fontSize: 16, color: 'white', fontFamily: 'Nunito' }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis."
    </Text>
        <Text style={{ fontSize: 16, color: 'white', fontFamily: 'Nunito', marginLeft: 20, marginTop: 30 }}>Email: </Text>
        <Text style={{ fontSize: 16, color: 'white', fontFamily: 'Nunito' }}>crunchyhotline@gmail.com</Text>
      </View>


      {/* <LinearGradient
        style={{ borderRadius: 10, width: 350, height: 40, justifyContent: 'center', alignSelf: 'center', marginTop: 50, marginLeft: 0 }}
        colors={['#ff3806',
          '#6d120c',]}
        start={[0, 0]}
      > */}
        <TouchableOpacity style={styles.button}>
          <Text style={{...gloStyles.whiteText, alignSelf: 'center', fontFamily: 'Nunito'}}>
            Edit Profile
        </Text>
        </TouchableOpacity>
      {/* </LinearGradient> */}
    </View>
  )
}
const styles = StyleSheet.create({
  imgBg: {
    height: 350,
    width: '100%',
  },
  img: {
    alignSelf: 'center',
    marginTop: -90,
    height: 150,
    width: 150,
    borderRadius: 80
  },
  button: {
    borderRadius: 3, width: 350, height: 40, justifyContent: 'center', alignSelf: 'center', alignContent: 'center', marginTop: 50,
  borderWidth: .25, borderColor: 'white'
    // alignItems: 'center',
    // borderRadius: 10
  },
})

export default Profile
