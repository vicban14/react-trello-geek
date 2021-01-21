const initialState = {
  visibility: "ALL",
  lists: [{
    title: 'to do',
    id: Date.now(),
    category: 'to do'
  }, {
    title: 'in progress',
    id: Date.now(),
    category: 'in progress'
  }, {
    title: 'done',
    id: Date.now(),
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
    default:
      return state;
  }
};

export default reducer;