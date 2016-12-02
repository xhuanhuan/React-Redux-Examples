const todos = (state = [], action) => {
  let id=state.length;
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id:id++,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
    return [
     ...state.slice(0, action.index),
     Object.assign({}, state[action.index], {
       completed: !state[action.index].completed
     }),
     ...state.slice(action.index + 1)
   ]

    default:
      return state
  }
}

export default todos;
