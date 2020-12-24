import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

const signInAction = ({ username, password }) => async (dispatch) => {
  const navigation = useNavigation()


  const url = 'https://ulti-todo-list.herokuapp.com/auth/signin'
  const reqData = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password,
    })
  }

  const response = await fetch(url, reqData);
  console.log(response.status, 'response')

  const unwrapped = await response.json()
  console.log(unwrapped)
  if (response.status === 202) {
    return(
      <View>
    {/* () => navigation.navigate('main'), */}
        
      </View>
    )
  }

  console.log(response.status)
  console.log(await response.text())
}

export default signInAction
