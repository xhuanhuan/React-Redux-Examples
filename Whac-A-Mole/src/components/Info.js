import React, { Component } from 'react'
import '../style/style.css'

class Info extends React.Component{
render(){
  return(
    <div className="info">
    <h4>击中次数：</h4><p>{this.props.success}</p>
    <h4>地鼠数目：</h4><p>{this.props.sum}</p>
    </div>
  );
}
}
export default Info;
