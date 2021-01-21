export const deleteTaskAction = (dispatch) => (id) => {
  dispatch({
    type: 'DELETE_TASK',
    payload: id
  })
}

export const deleteListAction = (dispatch) => (id) => {
  dispatch({
    type: 'DELETE_LIST',
    payload: id
  })
}