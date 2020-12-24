const addListAction = ({ todo }) => async (dispatch) => {

  const url = 'https://ulti-todo-list.herokuapp.com/auth/room'
  const reqData = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "username": "asusdssasFace",
      "password": "Corsnd",
      "room": {
        "title": "another room",
        "users": []
      }
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

export default addListAction