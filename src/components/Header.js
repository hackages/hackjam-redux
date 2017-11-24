import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export const Header = ({children}) =>
  <div className="header">
    {children}
  </div>;

Header.propTypes = {
  children: PropTypes.node.isRequired
};
