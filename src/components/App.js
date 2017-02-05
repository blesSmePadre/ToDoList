import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import '../styles/App.css';

const App = () => (
  <div className="todo-list">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
