import React,{Component} from 'react';
import { Link } from 'react-router';

class FilterLink  extends React.Component{
render(){
  let filter=this.props.filter;
  return(
    <Link
      to={filter === 'all' ? '' : filter}
      activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}
      onClick={this.props.onClick}
    >
      {this.props.children}
    </Link>
  );
}
}
export default FilterLink;
