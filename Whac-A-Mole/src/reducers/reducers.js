import { combineReducers } from 'redux'

let sum=0;
const mouses = (state = {}, action) => {
  switch (action.type) {


    case "Generate_Mouse":
    return{
      id:Math.floor(Math.random()*8)+1,
      GameOver:false,
      success:state.success,
      sum:++state.sum,
      first:0
    };


    case "Game_Over":
    return {
      id:0,
      GameOver:true,
      success:0,
      sum:0,
      first:0
    };

    case "Beat_Mouse":
    if(action.index===state.id){
        console.log('s');
      return {
        id:state.id,
        GameOver:false,
        success:state.first==0?++state.success:state.success,
        sum:state.sum,
        first:++state.first
      };
    }else{
      console.log('m');
        return {
          id:state.id,
          GameOver:false,
          success:state.success,
          sum:state.sum,
          first:state.first
        };
    }

    case "pause":
    default:
      return state
  }
}

const reducers = combineReducers({
   mouses
});
export default reducers;
