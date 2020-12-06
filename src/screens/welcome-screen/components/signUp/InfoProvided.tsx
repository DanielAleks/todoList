// import React, { useState } from 'react'
// import { Modal, Text, View } from 'react-native'
// import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
// import { gloStyles } from '../../../../../App'

// function InfoProvided({ modalState }) {
//   const [username, setUsername] = useState()
//   const [password, setPassword] = useState()




//   return (
//       <Modal style={{ width: 100, height: 100 }}>
//         <View style={{ backgroundColor: '#f1f1f1', width: '100%', height: '100%' }}>
//           <TouchableOpacity style={gloStyles.button} onPress={modalState}>
//             <Text>GoBack</Text>
//           </TouchableOpacity>

//           <View style={{ width: 300, margin: 60, backgroundColor: '#4f76ca', padding: 50, borderRadius: 10 }}>
//             <Text style={{ ...gloStyles.text, color: 'white' }}>
//               Enter the following to make a new account.
//               </Text>
//             <View style={{ flexDirection: 'row', marginTop: 30 }}>
//               <Text style={{ ...gloStyles.text, color: 'white' }}>
//                 Username:
//                 </Text>
//               <TextInput style={{ ...gloStyles.inputStyle, marginBottom: 10 }} value={username} />
//             </View>
//             <View style={{ flexDirection: 'row' }} >
//               <Text style={{ ...gloStyles.text, color: 'white' }}>
//                 Password:
//                 </Text>
//               <TextInput style={gloStyles.inputStyle} value={password} />
//             </View>
//             <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
//               <TouchableOpacity style={{ ...gloStyles.button, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text style={{ ...gloStyles.text, marginLeft: 10 }} >Create Account</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//   )
// }

// export default InfoProvided
