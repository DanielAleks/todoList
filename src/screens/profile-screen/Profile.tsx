import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Appbar, Portal } from 'react-native-paper'
import { gloStyles } from '../../../App'
import { DynamicBack, DynamicBackT } from '../../reusables/dynamicStuff'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

function Profile() {
  const navigation: any = useNavigation()


  return (
    <View style={styles.container}>


      <Image style={styles.imgBg} source={require('../../../assets/background.jpg')} />
      <Image style={styles.img} source={require('../../../assets/manWithCamera.jpg')} />
      <StatusBar backgroundColor="black" style="light" />



      <View style={styles.back}>
        <AntDesign onPress={() => navigation.navigate('MainRoom')} style={{ marginLeft: 10 }} name="back" size={25} color="black" />
      </View>

      <View style={styles.innerContainer}>
        <Text style={styles.username}>Daniel Aleksandrov</Text>

        <Text style={styles.bio}>
          Bio:
        </Text>

        <Text style={styles.description}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis."
    </Text>

        <Text style={styles.email}>Email: </Text>
        <Text style={styles.dynamicEmail}>crunchyhotline@gmail.com</Text>
      </View>


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Edit Profile
        </Text>
      </TouchableOpacity>
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
  container: {
    backgroundColor: '#302f2f',
    height: '100%',
    flex: 1
  },
  innerContainer: {
    marginTop: 30,
    width: '80%',
    alignSelf: 'center'
  },
  back: {
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    marginTop: 24,
    height: 50,
    width: 120,
    backgroundColor: '#a30101',
    borderBottomEndRadius: 10
  },
  button: {
    borderRadius: 3,
    width: 350,
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 50,
    borderWidth: .25,
    borderColor: 'white'
  },
  buttonText: {
    color: '#d5d5d5',
    alignSelf: 'center',
    fontFamily: 'Nunito'
  },
  description: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Nunito'
  },
  bio: {
    fontSize: 16,
    color: 'white',
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 10,
    fontFamily: 'Nunito'
  },
  username: {
    fontFamily: 'Nunito',
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white'
  },
  email: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Nunito',
    marginLeft: 20,
    marginTop: 30
  },
  dynamicEmail: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Nunito'
  },
})

export default Profile
