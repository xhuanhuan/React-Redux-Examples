import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
 //import VisibleTodoList from './VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
)

export default App;
