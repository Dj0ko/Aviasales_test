import React from 'react';
import Filter from '../filter/filter';
import Tickets from '../tickets/tickets';

import classes from './app.module.scss';

const App = () => (
  <main className={classes['page-main']}>
    <h1 className={classes['visually-hidden']}>Поиск билетов</h1>
    <Filter />
    <Tickets />
  </main>
);

export default App;
