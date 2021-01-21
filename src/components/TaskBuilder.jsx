import React from "react";
import {connect} from "react-redux";

const TaskBuilder = (props) => {
  function onKeyUpHandle(ev) {
    if (ev.keyCode === 13  && ev.target.value.trim()) {
      props.addTask(ev.target.value.trim(), props.listCategory)
      ev.target.value = ""
    }
  };

  return (
    <>
      <input id="taskBuilder" type="text" placeholder="Add a task" onKeyUp={(e) => onKeyUpHandle(e)} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTask: (text, category) =>
    dispatch({
      type:  "ADD_TASK",
      payload: text,
      id: Date.now(),
      complete: false,
      category: category
    })
});

const connected = connect(null, mapDispatchToProps)(TaskBuilder);

export default connected;