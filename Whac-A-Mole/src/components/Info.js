import React, { Component } from 'react'
import '../style/style.css'

class Info extends React.Component{
render(){
  return(
    <div className="Info">
    <h3>{this.props.sum==20?"Game Over":""}</h3>
    <table>
    <tr><th>击中次数：</th><td>{this.props.success}</td></tr>
    <tr><th>地鼠数目：</th><td>{this.props.sum}</td></tr>
    <tr><th>命中率：  </th><td>{this.props.success/this.props.sum}</td></tr>
    </table>
    </div>
  );
}
}
export default Info;
