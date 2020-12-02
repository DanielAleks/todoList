const signUpAction = (usersInputData) => async (dispatch) => {

  const response = await fetch('http://10.0.0.7:5001/auth/signup', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: 'usersInputData.username',
      password: "hj",
      email: "cruncxhyz"
    })
  });

  if (response.status === 202) {
    const unwapped = await response.json()

  }

  // console.log(response.status)
  // console.log(response.text())
}

export default signUpAction
