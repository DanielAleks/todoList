import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { gloStyles } from '../../../../App';

function Navbar() {
  
  
  const onP = () => {
    
  }


  return (

    

    <View style={styles.container}>

        <TouchableOpacity style={gloStyles.button} onPress={onP}>
          <Text style={gloStyles.text}>Join Room/Leave</Text>
        </TouchableOpacity>


        <TouchableOpacity style={gloStyles.button}>
          <Text style={gloStyles.text}>Create Room</Text>
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
