const initialState = {
  visibility: "ALL",
  lists: [{
    title: 'to do',
    id: 1,
    category: 'to do'
  }, {
    title: 'in progress',
    id: 2,
    category: 'in progress'
  }, {
    title: 'done',
    id: 3,
    category: 'done'
  }],
  tasks: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case "ADD_LIST":
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            title: action.payload,
            id: action.id,
            category: action.payload
          }
        ]
      };
    case "DELETE_LIST":
      return {
        ...state,
        lists: state.lists.filter(list => list.id !== action.payload)
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            title: action.payload,
            id: action.id,
            complete: action.complete,
            category: action.category
          }
        ]
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;