import React from 'react';
import Control from './Control';
import Gameboard from './Gameboard';
import Info from './Info';

let timer;
class Main extends React.Component{
  generate(){
    this.props.Generate_Mouse();
    if(this.props.sum===20){
      clearInterval(timer);
      setTimeout(()=>this.props.Game_Over(),800);
    }
  }
   handleClick(index){
    if(index==="start"){
      timer=setInterval(this.generate.bind(this),1000);
    }else if(index==="pause"){
      clearInterval(timer);
      this.props.Pause();
    }
   }
   handleGameboardClick(index){
     this.props.Beat_Mouse(index);
     if(this.props.sum===20){
      this.refs.gameover.style.display="block";
      setTimeout(()=>this.refs.gameover.style.display="none",1000);
     }
   }
  render(){
    const {id,success,sum}=this.props;
      return(
        <div className="container">
        <p className="tittle"> Whac A Mouse</p>
        <div className="row">
        <div className="text-center col-xs-8 col-s-4 col-m-4 col-lg-4 col-xs-offset-2 col-s-offset-2 col-m-offset-2 col-lg-offset-2">
          <Gameboard sum={sum} select={id} onClick={(index)=>this.handleGameboardClick(index)} />
          <div style={{clear:'left'}}></div>
          <Control sum={sum} onClick={(index)=>this.handleClick(index)} />
          <h3 ref="gameover" className="gameover">Game Over</h3>
        </div>
        <div className="text-center col-xs-8 col-s-4 col-m-4 col-lg-4 col-xs-offset-2 col-s-offset-0 col-m-offset-0 col-lg-offset-0">
          <Info success={success} sum={sum} />
        </div>
        </div>
        </div>
      );
  }

}

export default Main;
