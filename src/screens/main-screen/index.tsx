import React from 'react'
import TodoList from '../../components/TodoList'
import { StyleSheet, Text, View } from 'react-native';
import Navbar from '../../components/Navbar';
import { StatusBar } from 'expo-status-bar';


const MainScreen = () => {
  return (
    <View style={styles.container}>
      <TodoList />
      <Navbar />
      <StatusBar style="auto" />
    </View>
  )
}

export default MainScreen

export const S = StyleSheet.create({
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#978d8d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
