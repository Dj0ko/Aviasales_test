import React from 'react';
import Filter from '../filter/filter';

import '../../scss/style.scss';

const App = () => (
  const a = 1;

  <main className="page-main">
    <h1 className="visually-hidden">Поиск билетов</h1>
    <Filter />
    <section className="tickets">
      <div className="tickets__sorting sorting">
        <button type="button" className="button sorting__button">
          Самый дешевый
        </button>
        <button type="button" className="button sorting__button">
          Самый быстрый
        </button>
      </div>
      <ul className="tickets__list">
        <li className="tickets__list-item ticket">
          <span className="ticket__price">13 400 Р</span>
          <img src="#" className="ticket_company-logo" alt="логотип авиакомпании" />
          <dl className="ticket__route ticket__route--one-way">
            <dt className="ticket_text">MOW - HKT</dt>
            <dd className="ticket_text">10:45 - 08:00</dd>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">21ч 15м</dd>
            <dt className="ticket_text">2 пересадки</dt>
            <dd className="ticket_text">HKG, JNB</dd>
          </dl>
          <dl className="ticket__route ticket__route--round-trip">
            <dt className="ticket_text">HKT - MOW</dt>
            <dd className="ticket_text">11:20 - 00:50</dd>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">13ч 30м</dd>
            <dt className="ticket_text">2 пересадки</dt>
            <dd className="ticket_text">HKG</dd>
          </dl>
        </li>
        <li className="tickets__list-item ticket">
          <span className="ticket__price">13 400 Р</span>
          <img src="#" className="ticket_company-logo" alt="логотип авиакомпании" />
          <dl className="ticket__route ticket__route--one-way">
            <dt className="ticket_text">MOW - HKT</dt>
            <dd className="ticket_text">10:45 - 08:00</dd>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">21ч 15м</dd>
            <dt className="ticket_text">2 пересадки</dt>
            <dd className="ticket_text">HKG, JNB</dd>
          </dl>
          <dl className="ticket__route ticket__route--round-trip">
            <dt className="ticket_text">HKT - MOW</dt>
            <dd className="ticket_text">11:20 - 00:50</dd>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">13ч 30м</dd>
            <dt className="ticket_text">2 пересадки</dt>
            <dd className="ticket_text">HKG</dd>
          </dl>
        </li>
        <li className="tickets__list-item ticket">
          <span className="ticket__price">13 400 Р</span>
          <img src="#" className="ticket_company-logo" alt="логотип авиакомпании" />
          <dl className="ticket__route ticket__route--one-way">
            <dt className="ticket_text">MOW - HKT</dt>
            <dd className="ticket_text">10:45 - 08:00</dd>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">21ч 15м</dd>
            <dt className="ticket_text">2 пересадки</dt>
            <dd className="ticket_text">HKG, JNB</dd>
          </dl>
          <dl className="ticket__route ticket__route--round-trip">
            <dt className="ticket_text">HKT - MOW</dt>
            <dd className="ticket_text">11:20 - 00:50</dd>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">13ч 30м</dd>
            <dt className="ticket_text">2 пересадки</dt>
            <dd className="ticket_text">HKG</dd>
          </dl>
        </li>
        <li className="tickets__list-item ticket">
          <span className="ticket__price">13 400 Р</span>
          <img src="#" className="ticket_company-logo" alt="логотип авиакомпании" />
          <dl className="ticket__route ticket__route--one-way">
            <dt className="ticket_text">MOW - HKT</dt>
            <dd className="ticket_text">10:45 - 08:00</dd>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">21ч 15м</dd>
            <dt className="ticket_text">2 пересадки</dt>
            <dd className="ticket_text">HKG, JNB</dd>
          </dl>
          <dl className="ticket__route ticket__route--round-trip">
            <dt className="ticket_text">HKT - MOW</dt>
            <dd className="ticket_text">11:20 - 00:50</dd>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">13ч 30м</dd>
            <dt className="ticket_text">2 пересадки</dt>
            <dd className="ticket_text">HKG</dd>
          </dl>
        </li>
        <li className="tickets__list-item ticket">
          <span className="ticket__price">13 400 Р</span>
          <img src="#" className="ticket_company-logo" alt="логотип авиакомпании" />
          <dl className="ticket__route ticket__route--one-way">
            <dt className="ticket_text">MOW - HKT</dt>
            <dd className="ticket_text">10:45 - 08:00</dd>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">21ч 15м</dd>
            <dt className="ticket_text">2 пересадки</dt>
            <dd className="ticket_text">HKG, JNB</dd>
          </dl>
          <dl className="ticket__route ticket__route--round-trip">
            <dt className="ticket_text">HKT - MOW</dt>
            <dd className="ticket_text">11:20 - 00:50</dd>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">13ч 30м</dd>
            <dt className="ticket_text">2 пересадки</dt>
            <dd className="ticket_text">HKG</dd>
          </dl>
        </li>
      </ul>
    </section>
  </main>
);

export default App;
