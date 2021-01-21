import React from "react";
import {connect} from "react-redux";

const Lists = (props) => {
  function filterTasks(tasks = [], filter) {
    return tasks.filter(task => task.category === filter)
}

  return (
    <div>
      {filterTasks(props.tasks, props.listCategory).map(task => (
        <div className="task" key={task.id}>
          <h4>{task.title}</h4>
          <button className="deleteButton">Delete</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  filter: state.visibility
});

const connected = connect(mapStateToProps, null)(Lists);

export default connected;