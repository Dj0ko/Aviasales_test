import React from 'react';
import PropTypes from 'prop-types';

import classes from './transfer-filter.module.scss';

const TransferFilter = ({ label, id, actionCreator, checked }) => (
  <li className={classes['filter__list-item']}>
    <input
      className={`${classes.filter__input} ${classes['visually-hidden']}`}
      type="checkbox"
      id={id}
      name="transfers"
      onChange={actionCreator}
      checked={checked}
    />
    <label className={classes.filter__label} htmlFor={id}>
      {label}
    </label>
  </li>
);

export default TransferFilter;

TransferFilter.defaultProps = {
  label: '',
  id: '',
  actionCreator: () => {},
  checked: true,
};

TransferFilter.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  actionCreator: PropTypes.func,
  checked: PropTypes.bool,
};
