const initialState = {
  visibility: "ALL",
  lists: [],
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
            id: action.id
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
            complete: action.complete
          }
        ]
      };
    default:
      return state;
  }
};

export default reducer;