import React, {PropTypes, Component } from 'react'
import Todo from './Todo'

class TodoList extends React.Component{
  render(){
    return(
      <ul>
        {
          this.props.todos.map((todo)=>
            <Todo {...todo} onClick={(index)=>this.props.onTodoClick(index)} />
        )
      }
      </ul>
    );
  }
}
TodoList.PropTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}
export default TodoList;
