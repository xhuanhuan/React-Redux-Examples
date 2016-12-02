import React,{Component} from 'react';

class AddTodo extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    this.props.onAddClick(this.refs.input.value);
    this.refs.input.value='';
  }
  render(){
    return(
      <form onSubmit={(e)=>this.handleSubmit(e)}>
      <input type="text"  ref="input" placeholder="add todos" />
      <input type="submit" value="Add" />
      </form>
    );
  }
}
export default AddTodo;
