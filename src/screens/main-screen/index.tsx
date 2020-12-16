import React, { useState } from 'react'
import TodoList from './components/TodoList'
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './navbar/Navbar';
import { StatusBar } from 'expo-status-bar';
import { FAB, Portal, Provider } from 'react-native-paper';
import AddATodo from './components/fabGroup/AddATodo';
import CreateAList from './components/fabGroup/CreateAList';


const MainScreen = () => {
  const [editMode, setEditMode] = useState(false)
  const [CreateListModal, setCreateListModal] = useState(false)
  const [todoModal, setTodoModal] = useState(false)
  const [state, setState] = useState({ open: false })

  const nowEditing = () => {
    setEditMode(prev => !prev)
  }
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;


  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 70 }}>
        <Navbar />
      </View>
      <TodoList />
      <StatusBar style="auto" />


        {todoModal ? <AddATodo setTodoModal={setTodoModal} /> : null}

        {CreateListModal ? <CreateAList setCreateListModal={setCreateListModal} /> : null}

      <Provider>
        <Portal>
        {/* <Portal> // why do I need Portal??? works without */}


        <FAB.Group
          visible={true}
          open={open}
          icon={open ? 'book-variant' : 'plus'}
          actions={[
            {
              icon: 'account-edit',
              label: editMode ? 'Turn Off Editing Mode' : 'Edit Rooms',
              onPress: nowEditing,
            },
            {
              icon: 'account-search',
              label: 'Create List',
              onPress: () => setCreateListModal(prev => !prev),
            },
            {
              icon: 'book-plus-multiple',
              label: 'AddTodo',
              onPress: () => setTodoModal(prev => !prev),
            },
          ]}

          onStateChange={onStateChange}
        />

        </Portal>
      </Provider>
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