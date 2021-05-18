import React from 'react';

import classes from './transfer-filter.module.scss';

const TransferFilter = (filter) => {
  const { filterName } = filter;
  return (
    <li className={classes['filter__list-item']}>
      <input
        className={`${classes.filter__input} ${classes['visually-hidden']}`}
        type="checkbox"
        id="allTransfers"
        name="transfers"
        // onChange={showAllTransfers}
        // checked={
        //   allTransfers || (withoutTransfers && oneTransfer && twoTransfers && threeTransfers) ? 'checked' : false
        // }
      />
      <label className={classes.filter__label} htmlFor="allTransfers">
        {filterName}
      </label>
    </li>
  );
};

export default TransferFilter;
