import React,{Component} from 'react'
import Visibility_Filter from '../actions/actions'
import FilterLink from '../containers/FilterLink'
import { Link } from 'react-router';
class Footer extends React.Component{
  handleClick(filter){
      this.props.onClick(filter)
  }
  render(){
    return(
      <p>Show:
       <FilterLink filter="all" onClick={()=>this.handleClick("Show_All")} >All</FilterLink><span>,</span>
       <FilterLink filter="active" onClick={()=>{this.handleClick("Show_Active");}} >Active</FilterLink><span>,</span>
       <FilterLink filter="completed" onClick={()=>this.handleClick("Show_Completed")} >Completed</FilterLink>
      </p>
    );
  }
}

export default Footer;
