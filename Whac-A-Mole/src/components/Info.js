import React from 'react'
import '../style/style.css'

class Info extends React.Component{
render(){
  return(
    <div className="Info">
    <h4>游戏结果一览表</h4>
    <table className="table table-hover">
    <tbody>
    <tr><th>击中次数：</th><td>{this.props.success}</td></tr>
    <tr><th>地鼠数目：</th><td>{this.props.sum}</td></tr>
    <tr><th>命中率：  </th><td>{(this.props.success/this.props.sum).toFixed(2)}</td></tr>
    </tbody>
    </table>
    </div>
  );
}
}
export default Info;
