import React from "react";
import {connect} from "react-redux";
import TaskBuilder from "./TaskBuilder";
import Tasks from "./Tasks";

const Lists = (props) => {
  return (
    <div className="listContainer">
      {props.lists.map(list => (
        <div className="list" key={list.id}>
          <h3>{list.title}</h3>
          <TaskBuilder listCategory={list.category} />
          <Tasks listCategory={list.category} />
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