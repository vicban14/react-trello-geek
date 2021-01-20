import React from "react";
import {connect} from "react-redux";

const Lists = (props) => {
  return (
    <div>
      {props.tasks.map(task => (
        <div key={task.id}>
          <h4>{task.title}</h4>
          <button>{task.complete ? 'Completed' : 'Uncompleted'}</button>
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