const signUpAction = ({ username, password }) => async (dispatch) => {

  interface InfoT {
    username: String
    password: String
    email: String
  }

  const url = 'https://ulti-todo-list.herokuapp.com/auth/signup'
  const reqData = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password,
      // email
    })
  }

  const response = await fetch(url, reqData);
  console.log(response.status, 'response')

  const unwrapped = await response.json()
  // console.log(await response.text())
  console.log(unwrapped)
  //   if (response.status === 202) {
  //   }

  //   console.log(response.status)
}

export default signUpAction
