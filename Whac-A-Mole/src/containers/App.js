import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import Main from '../components/Main';
import * as actionCreators from '../actions/actions';

function mapstatetoprops(state){
  return{
    id:state.mouses.id,
    GameOver:state.mouses.GameOver,
    success:state.mouses.success,
    sum:state.mouses.sum,
    first:state.mouses.first
  }
}
function mapactiontoprops(dispatch){
  return bindActionCreators(actionCreators,dispatch);
}
const App=connect(mapstatetoprops,mapactiontoprops)(Main);
export default App;
