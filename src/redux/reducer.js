const initialState = {
  visibility: "ALL",
  lists: []
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
    default:
      return state;
  }
};

export default reducer;