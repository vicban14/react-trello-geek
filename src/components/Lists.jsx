import React from "react";
import {connect} from "react-redux";
import TaskBuilder from "./TaskBuilder";

const Lists = (props) => {
  return (
    <div>
      {props.lists.map(list => (
        <div key={list.id}>
          <h3>{list.title}</h3>
          <TaskBuilder />
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