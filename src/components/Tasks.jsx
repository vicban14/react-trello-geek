import React from "react";
import {connect} from "react-redux";
import { deleteTaskAction } from "../redux/actions";

const Tasks = (props) => {
  function filterTasks(tasks = [], filter) {
    return tasks.filter(task => task.category === filter)
  }

  const dragStart = (ev) => {
    const target = ev.target;
    ev.dataTransfer.setData('id', target.id);
  }

  const dragOverStop = (ev) => {
    ev.stopPropagation()
  }

  const drop = (ev) => {
    ev.preventDefault()
    const taskId = ev.dataTransfer.getData('id')
    const task = document.getElementById(taskId)
    ev.target.appendChild(task)
  } 

  const dragOver = (ev) => {
    ev.preventDefault()
  }

  return (

    <div className="taskBar" onDrop={drop} onDragOver={dragOver}>
      {filterTasks(props.tasks, props.listCategory).map((task, i) => (
        <div className="task" id={task.id} key={task.id} draggable='true' onDragStart={dragStart} onDragOver={dragOverStop} data-category={task.category}>
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

const connected = connect(mapStateToProps, mapDispatchToProps)(Tasks);

export default connected;