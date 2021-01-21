import React from "react";
import {connect} from "react-redux";

const ListBuilder = (props) => {
  function onKeyUpHandle(ev) {
    if (ev.keyCode === 13  && ev.target.value.trim()) {
      props.addList(ev.target.value.trim())
      ev.target.value = ""
    }
  };

  return (
    <>
      <input type="text" placeholder="Create a list" onKeyUp={(e) => onKeyUpHandle(e)} id="listBuilder" />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addList: (text) =>
    dispatch({
      type:  "ADD_LIST",
      payload: text,
      id: Date.now()
    })
});

const connected = connect(null, mapDispatchToProps)(ListBuilder);

export default connected;