import React,{Component} from 'react';
import { connect } from 'react-redux'
import Footer from '../components/Footer';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import {AddTodos,ToggleTodo,setVisibilityFilter} from '../actions/actions'
class App extends React.Component{
  render(){
    const{dispatch,visibleTodos,visibilityFilter}=this.props;
    return(
      <div>
        <AddTodo onAddClick={text=>dispatch(AddTodos(text))} />
        <TodoList todos={visibleTodos} onTodoClick={(index)=>dispatch(ToggleTodo(index))} />
        <Footer onClick={visibilityFilter=>dispatch(setVisibilityFilter(visibilityFilter))} />
      </div>
    );
  }
}
function selectTodos(todos,filter) {
  switch(filter){
    case 'Show_All':
    return todos;
    case 'Show_Active':
    return todos.filter(todo=>!todo.completed);
    case 'Show_Completed':
    return todos.filter(todo=>todo.completed);
    default:
    return todos;

  }
}
function select(state){
  return{
    visibleTodos:selectTodos(state.todos,state.visibilityFilter),
    visibilityFilter:state.visibilityFilter
  }

}
export default connect(select)(App);
