const signInAction = ({username, password}) => async (dispatch) => {

  const url = 'https://ulti-todo-list.herokuapp.com/auth/signin'
  const reqData = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password,
    })
  }

  const response = await fetch(url, reqData);
  console.log(response.status, 'response')

  const unwrapped = await response.json()
  console.log(unwrapped)
  if (response.status === 202) {
  }

  // console.log(response.status)
  // console.log(await response.text())
}

export default signInAction
