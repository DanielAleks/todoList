import React, { useState } from 'react'
import { View } from 'react-native'
import { Drawer, FAB, Portal, Provider } from 'react-native-paper';


function TodosProvider() {
  const [modalTodo, setModalTodo] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [modalList, setModalList] = useState(false)
  const [state, setState] = useState({ open: false })

  const editingModeOn = () => {
    setEditMode(true)
  }

  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;

  return (
      <Provider>
        <FAB.Group
          visible={true}
          open={open}
          icon={open ? 'book-variant' : 'plus'}
          actions={[
            {
              icon: 'account-edit',
              label: editMode ? 'Turn Off Editing Mode' : 'Edit Lists',
              onPress: editingModeOn
            },
            {
              icon: 'account-search',
              label: 'Add Todo',
              onPress: () => setModalTodo(prev => !prev),
            },
            {
              icon: 'book-plus-multiple',
              label: 'Create List',
              onPress: () => setModalList(prev => !prev),
            },
          ]}

          onStateChange={onStateChange}
        />
      </Provider>
  )
}

export default TodosProvider
