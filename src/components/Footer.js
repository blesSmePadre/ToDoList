import React from 'react';
import FilterLink from '../containers/FilterLink';
import ClearCompleted from '../containers/ClearCompleted';
import ActiveItemsCount from '../containers/ActiveItemsCount';
import * as types from '../constants/FilterTypes';
import '../styles/Footer.css';

const Footer = () => (
  <div className="todo-item-footer">
    <div>Осталось:{" "}<span className="todo-item-count-active"><ActiveItemsCount/></span></div>
    <div className="todo-item-filter">
      <FilterLink filter={types.SHOW_ALL}>Все</FilterLink>
      <FilterLink filter={types.SHOW_ACTIVE}>Активные</FilterLink>
      <FilterLink filter={types.SHOW_COMPLETED}>Завершенные</FilterLink>
    </div>
    <div className="todo-item-remove-completed">
        <ClearCompleted/>
    </div>
  </div>
)

export default Footer;
