import React from 'react';
import TransfersFilterList from '../transfers-filter-list/transfers-filter-list';

import classes from './filters.module.scss';

const Filters = () => (
  <section className={classes.filter}>
    <h2 className={classes.filter__title}>Количество пересадок</h2>
    <TransfersFilterList />
  </section>
);

export default Filters;
