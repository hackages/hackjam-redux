import React from 'react';
import PropTypes from 'prop-types';

const FilterButton = ({setFilter, filter}) =>
  <button className="waves-effect waves-light btn" onClick={() => setFilter(filter)}>{filter}</button>

export const Filters = ({setFilter}) =>
  <div>
    <FilterButton setFilter={setFilter} filter={"all"}/>
    <FilterButton setFilter={setFilter} filter={"completed"}/>
    <FilterButton setFilter={setFilter} filter={"ongoing"}/>
  </div>;

Filters.propTypes = {
  setFilter: PropTypes.func.isRequired
};
