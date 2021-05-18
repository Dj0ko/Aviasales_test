/* eslint-disable arrow-body-style */
import React from 'react';
import { connect } from 'react-redux';
import TransfersFilterList from '../transfers-filter-list/transfers-filter-list';
// import PropTypes from 'prop-types';

import * as actions from '../../redux/actions/actions';
import classes from './filters.module.scss';

const Filters = () =>
  //   {
  //   transferFilter,
  // showAllTransfers,
  // showWithoutTransfers,
  // showOneTransfer,
  // showTwoTransfers,
  // showThreeTransfers,
  // }
  {
    // const allTransfers = transferFilter[0];
    // const withoutTransfers = transferFilter[1];
    // const oneTransfer = transferFilter[2];
    // const twoTransfers = transferFilter[3];
    // const threeTransfers = transferFilter[4];

    return (
      <section className={classes.filter}>
        <h2 className={classes.filter__title}>Количество пересадок</h2>
        <TransfersFilterList />
        {/* <ul className={classes.filter__list}>
        <li className={classes['filter__list-item']}>
          <input
            className={`${classes.filter__input} ${classes['visually-hidden']}`}
            type="checkbox"
            id="allTransfers"
            name="transfers"
            onChange={showAllTransfers}
            checked={
              allTransfers || (withoutTransfers && oneTransfer && twoTransfers && threeTransfers) ? 'checked' : false
            }
          />
          <label className={classes.filter__label} htmlFor="allTransfers">
            Все
          </label>
        </li>
        <li className={classes['filter__list-item']}>
          <input
            className={`${classes.filter__input} ${classes['visually-hidden']}`}
            type="checkbox"
            id="withoutTransfers"
            name="transfers"
            onChange={showWithoutTransfers}
            checked={withoutTransfers ? 'checked' : false}
          />
          <label className={classes.filter__label} htmlFor="withoutTransfers">
            Без пересадок
          </label>
        </li>
        <li className={classes['filter__list-item']}>
          <input
            className={`${classes.filter__input} ${classes['visually-hidden']}`}
            type="checkbox"
            id="oneTransfer"
            name="transfers"
            onChange={showOneTransfer}
            checked={oneTransfer ? 'checked' : false}
          />
          <label className={classes.filter__label} htmlFor="oneTransfer">
            1 пересадка
          </label>
        </li>
        <li className={classes['filter__list-item']}>
          <input
            className={`${classes.filter__input} ${classes['visually-hidden']}`}
            type="checkbox"
            id="twoTransfers"
            name="transfers"
            onChange={showTwoTransfers}
            checked={twoTransfers ? 'checked' : false}
          />
          <label className={classes.filter__label} htmlFor="twoTransfers">
            2 пересадки
          </label>
        </li>
        <li className={classes['filter__list-item']}>
          <input
            className={`${classes.filter__input} ${classes['visually-hidden']}`}
            type="checkbox"
            id="threeTransfers"
            name="transfers"
            onChange={showThreeTransfers}
            checked={threeTransfers ? 'checked' : false}
          />
          <label className={classes.filter__label} htmlFor="threeTransfers">
            3 пересадки
          </label>
        </li>
      </ul> */}
      </section>
    );
  };

const mapStateToProps = (state) => ({
  transferFilter: state.filterReducer,
});

export default connect(mapStateToProps, actions)(Filters);

// Filters.defaultProps = {
//   transferFilter: [false, false, false, false, false],
//   showAllTransfers: () => {},
//   showWithoutTransfers: () => {},
//   showOneTransfer: () => {},
//   showTwoTransfers: () => {},
//   showThreeTransfers: () => {},
// };

// Filters.propTypes = {
//   transferFilter: PropTypes.arrayOf(PropTypes.bool),
//   showAllTransfers: PropTypes.func,
//   showWithoutTransfers: PropTypes.func,
//   showOneTransfer: PropTypes.func,
//   showTwoTransfers: PropTypes.func,
//   showThreeTransfers: PropTypes.func,
// };
