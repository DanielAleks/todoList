const addListAction = ({ todo }) => async (dispatch) => {

  const url = 'https://ulti-todo-list.herokuapp.com/auth/list'
  const reqData = {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "username": "asusdssasFace",
      "password": "Corsnd",
      "roomId": "738217a4-55f9-455f-ad8d-e319f38235f4",
      "_id": "5fc7ccaa295eeb4173fcfc88"
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