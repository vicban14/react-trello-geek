function reducer(state, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload,
            completed: action.completed || false,
            id: action.id
          }
        ]
      };
    default:
      return state;
  }
}

export default reducer