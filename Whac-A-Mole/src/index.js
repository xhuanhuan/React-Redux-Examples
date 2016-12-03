import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import {syncHistoryWithStore} from 'react-router-redux'
// import { Router, Route, browserHistory } from 'react-router';
import App from './containers/App'
import reducers from './reducers/reducers'
 const previous={
   mouses:{
     id:0,
     GameOver:true,
     success:0,
     sum:0,
     first:0
   }
 }

// const enhancers = compose(
//   window.devToolsExtension?window.devToolsExtension():f=>f
// );
 const store = createStore(reducers,previous);
// const history=syncHistoryWithStore(browserHistory,store);


class Root extends React.Component{
  render(){
    return(
  <Provider store={store}>
    <App />
  </Provider>
);}
}
render(<Root />,  document.getElementById('root')
)
