import React from "react";
import {connect} from "react-redux";
import { deleteTaskAction } from "../redux/actions";

const Lists = (props) => {
  function filterTasks(tasks = [], filter) {
    return tasks.filter(task => task.category === filter)
  }

  return (
    <div>
      {filterTasks(props.tasks, props.listCategory).map(task => (
        <div className="task" key={task.id}>
          <h4>{task.title}</h4>
          <button className="deleteButton" onClick={(e) => props.delete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  filter: state.visibility
});

const mapDispatchToProps = (dispatch) => ({
  delete: deleteTaskAction(dispatch)
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Lists);

export default connected;