import React from "react";
import {connect} from "react-redux";
import { deleteListAction } from "../redux/actions";
import TaskBuilder from "./TaskBuilder";
import Tasks from "./Tasks";

const Lists = (props) => {
  return (
    <div className="listContainer">
      {props.lists.map(list => (
        <div className="list" key={list.id}>
          <div>
            <h3>{list.title}</h3>
            <button className="deleteButton" onClick={(e) => props.delete(list.id)}>Delete</button>
          </div>
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

const mapDispatchToProps = (dispatch) => ({
  delete: deleteListAction(dispatch)
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Lists);

export default connected;