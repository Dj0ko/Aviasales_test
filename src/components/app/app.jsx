import React from 'react';
import Filter from '../filter/filter';
import Tickets from '../tickets/tickets';

import '../../scss/style.scss';

const App = () => (
  <main className="page-main">
    <h1 className="visually-hidden">Поиск билетов</h1>
    <Filter />
    <Tickets />
  </main>
);

export default App;
