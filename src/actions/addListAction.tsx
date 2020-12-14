const addListAction = ({ todo }) => async (dispatch) => {

  const url = 'https://ulti-todo-list.herokuapp.com/auth/list'
  const reqData = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: "my new todo list",
      todos: [{ "_id": "D o somethings", "todo": "ansything" }],
      roomId: "738217a4-55f9-455f-ad8d-e319f38235f4"
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