import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { S } from '../../App';

function Navbar() {
  const onP = () => {
    
  }

  
  return (

    

    <View style={styles.container}>

        <TouchableOpacity style={S.button} onPress={onP}>
          <Text style={S.text}>Join Room/Leave</Text>
        </TouchableOpacity>


        <TouchableOpacity style={S.button}>
          <Text style={S.text}>Create Room</Text>
        </TouchableOpacity>
        

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#44c1ca',
    position: 'absolute',
    top: 0,
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
    
  },

});

export default Navbar
