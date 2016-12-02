import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
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
const store = createStore(reducer,previous)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
