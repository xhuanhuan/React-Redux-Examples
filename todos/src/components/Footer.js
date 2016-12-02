import React,{Component} from 'react'
import Visibility_Filter from '../actions/actions'
class Footer extends React.Component{
  handleClick(filter){
      this.props.onClick(filter)
  }
  render(){
    return(

      // <form>Show:
      //  <input type="radio" name="filter" onClick={()=>this.handleClick("Show_All")}  />All
      //  <input type="radio" name="filter" onClick={()=>{this.handleClick("Show_Active");}} />Active
      //  <input type="radio" name="filter" onClick={()=>this.handleClick("Show_Completed")}  />Completed
      // </form>
      <p>Show:
       <a ref="input_all" href='#' onClick={()=>this.handleClick("Show_All")} >All</a><span>,</span>
       <a href='#' onClick={()=>{this.handleClick("Show_Active");}} >Active</a><span>,</span>
       <a href='#' onClick={()=>this.handleClick("Show_Completed")} >Completed</a>
      </p>
    );
  }
}

export default Footer;
