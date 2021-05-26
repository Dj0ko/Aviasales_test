import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions/actions';

import classes from './sorting.module.scss';

const Sorting = ({ classButtonCheapest, classButtonFastest, changeSorting }) => (
  <div>
    <button type="button" className={classButtonCheapest} onClick={() => changeSorting(false)}>
      Самый дешевый
    </button>
    <button type="button" className={classButtonFastest} onClick={() => changeSorting(true)}>
      Самый быстрый
    </button>
  </div>
);

const mapStateToProps = (state) => {
  if (!state.sortReducer && state.sortReducer !== null) {
    return {
      classButtonCheapest: `${classes.button} ${classes['button--cheapest']} ${classes['button--active']}`,
      classButtonFastest: `${classes.button} ${classes['button--fastest']}`,
    };
  }

  if (state.sortReducer && state.sortReducer !== null) {
    return {
      classButtonCheapest: `${classes.button} ${classes['button--cheapest']}`,
      classButtonFastest: `${classes.button} ${classes['button--fastest']} ${classes['button--active']}`,
    };
  }

  return {
    classButtonCheapest: `${classes.button} ${classes['button--cheapest']}`,
    classButtonFastest: `${classes.button} ${classes['button--fastest']}`,
  };
};

export default connect(mapStateToProps, actions)(Sorting);

Sorting.defaultProps = {
  classButtonCheapest: `${classes.button} ${classes['button--cheapest']} ${classes['button--active']}`,
  classButtonFastest: `${classes.button} ${classes['button--fastest']}`,
  changeSorting: () => {},
};

Sorting.propTypes = {
  classButtonCheapest: PropTypes.string,
  classButtonFastest: PropTypes.string,
  changeSorting: PropTypes.func,
};
