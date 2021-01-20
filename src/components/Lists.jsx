import React from "react";
import {connect} from "react-redux";

const Lists = (props) => {
  return (
    <div>
      {props.lists.map(list => (
        <div key={list.id}>
          <h3>{list.title}</h3>
          <input placeholder="Add a task"></input>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  lists: state.lists,
  filter: state.visibility
});

const connected = connect(mapStateToProps, null)(Lists);

export default connected;