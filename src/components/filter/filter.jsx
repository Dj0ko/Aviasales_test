import React from 'react';

import classes from './filter.module.scss';

const Filter = () => (
  <section className={classes.filter}>
    <h2 className={classes.filter__title}>Количество пересадок</h2>
    <ul className={classes.filter__list}>
      <li className={classes['filter__list-item']}>
        <input className={`${classes.filter__input} ${classes['visually-hidden']}`} type="checkbox" id="allTransfers" />
        <label className={classes.filter__label} htmlFor="allTransfers">
          Все
        </label>
      </li>
      <li className={classes['filter__list-item']}>
        <input
          className={`${classes.filter__input} ${classes['visually-hidden']}`}
          type="checkbox"
          id="withoutTransfers"
        />
        <label className={classes.filter__label} htmlFor="withoutTransfers">
          Без пересадок
        </label>
      </li>
      <li className={classes['filter__list-item']}>
        <input className={`${classes.filter__input} ${classes['visually-hidden']}`} type="checkbox" id="oneTransfer" />
        <label className={classes.filter__label} htmlFor="oneTransfer">
          1 пересадка
        </label>
      </li>
      <li className={classes['filter__list-item']}>
        <input className={`${classes.filter__input} ${classes['visually-hidden']}`} type="checkbox" id="twoTransfers" />
        <label className={classes.filter__label} htmlFor="twoTransfers">
          2 пересадки
        </label>
      </li>
      <li className={classes['filter__list-item']}>
        <input
          className={`${classes.filter__input} ${classes['visually-hidden']}`}
          type="checkbox"
          id="threeTransfers"
        />
        <label className={classes.filter__label} htmlFor="threeTransfers">
          3 пересадки
        </label>
      </li>
    </ul>
  </section>
);

export default Filter;
