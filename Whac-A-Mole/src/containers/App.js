import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import Main from '../components/Main';
import * as actionCreators from '../actions/actions';

function mapstatetoprops(state){
  return state.mouses;
}
function mapactiontoprops(dispatch){
  return bindActionCreators(actionCreators,dispatch);
}
const App=connect(mapstatetoprops,mapactiontoprops)(Main);
export default App;
