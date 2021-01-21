import React from "react";
import {connect} from "react-redux";

const Lists = (props) => {
  return (
    <div>
      {console.log(props.tasks)}
      {props.tasks.map(task => task.category === props.listCategory
      ? (
        <div className="task" key={task.id}>
          <h4>{task.title}</h4>
          <button>{task.complete ? 'Completed' : 'Uncompleted'}</button>
        </div>
      )
      : null )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  filter: state.visibility
});

const connected = connect(mapStateToProps, null)(Lists);

export default connected;