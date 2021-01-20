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
      <input type="text" placeholder="Write the name list" onKeyUp={(e) => onKeyUpHandle(e)} />
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