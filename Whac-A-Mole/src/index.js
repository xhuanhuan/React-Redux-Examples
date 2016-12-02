import React,{Component} from 'react'
import { render } from 'react-dom'
import { createStore,compose } from 'redux'
import { Provider } from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router';
import App from './containers/App'
import reducer from './reducers/index'
const previous={
  todos:[
    {
      text:'aaa',
      completed:false,
      id:0
    }
  ],
  visibilityFilter:"Show_All"
};
const enhancers = compose(
  window.devToolsExtension?window.devToolsExtension():f=>f
);
const store = createStore(reducer,previous,enhancers);
const history=syncHistoryWithStore(browserHistory,store);
class Root extends React.Component{
  render(){
    return(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/(:aa)" component={App} />
    </Router>
  </Provider>
);
}
}
render(<Root />,  document.getElementById('root')
)
