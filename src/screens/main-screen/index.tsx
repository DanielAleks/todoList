import React from 'react'
import TodoList from './components/TodoList'
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './navbar/Navbar';
import { StatusBar } from 'expo-status-bar';


const MainScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 70}}>

      <Navbar />
      </View>
      <TodoList />
      <StatusBar style="auto" />
    </View>
  )
}

export default MainScreen

export const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 14,
  },
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    height: 50,
    width: 100,
    backgroundColor: '#5c0f58',
    borderRadius: 40,
  },

  });