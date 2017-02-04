import React from 'react';
import FilterLink from '../containers/FilterLink';
import ClearCompleted from '../containers/ClearCompleted';
import * as types from '../constants/FilterTypes';

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter={types.SHOW_ALL}>
      All
    </FilterLink>
    {", "}
    <FilterLink filter={types.SHOW_ACTIVE}>
      Active
    </FilterLink>
    {", "}
    <FilterLink filter={types.SHOW_COMPLETED}>
      Completed
    </FilterLink>
    <ClearCompleted/>
  </p>
)

export default Footer;
