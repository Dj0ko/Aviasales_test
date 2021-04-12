import React from 'react';

import logo from './logo-airline.png';

const Tickets = () => (
  <section className="tickets">
    <div className="tickets__sorting sorting">
      <button type="button" className="button sorting__button button--active button--cheapest">
        Самый дешевый
      </button>
      <button type="button" className="button sorting__button button--fastest">
        Самый быстрый
      </button>
    </div>
    <ul className="tickets__list">
      <li className="tickets__list-item tickets__ticket ticket">
        <div className="ticket__container">
          <span className="ticket__price">13 400 Р</span>
          <img src={logo} className="ticket_company-logo" alt="логотип авиакомпании" />
        </div>
        <dl className="ticket__route ticket__route--one-way">
          <div>
            <dt className="ticket_text">MOW - HKT</dt>
            <dd className="ticket_text">10:45 - 08:00</dd>
          </div>
          <div>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">21ч 15м</dd>
          </div>
          <div>
            <dt className="ticket_text">2 пересадки</dt>
            <dd className="ticket_text">HKG, JNB</dd>
          </div>
        </dl>
        <dl className="ticket__route ticket__route--round-trip">
          <div>
            <dt className="ticket_text">HKT - MOW</dt>
            <dd className="ticket_text">11:20 - 00:50</dd>
          </div>
          <div>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">13ч 30м</dd>
          </div>
          <div>
            <dt className="ticket_text">1 пересадка</dt>
            <dd className="ticket_text">HKG</dd>
          </div>
        </dl>
      </li>
      <li className="tickets__list-item tickets__ticket ticket">
        <div className="ticket__container">
          <span className="ticket__price">13 400 Р</span>
          <img src={logo} className="ticket_company-logo" alt="логотип авиакомпании" />
        </div>
        <dl className="ticket__route ticket__route--one-way">
          <div>
            <dt className="ticket_text">MOW - HKT</dt>
            <dd className="ticket_text">10:45 - 08:00</dd>
          </div>
          <div>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">21ч 15м</dd>
          </div>
          <div>
            <dt className="ticket_text">2 пересадки</dt>
            <dd className="ticket_text">HKG, JNB</dd>
          </div>
        </dl>
        <dl className="ticket__route ticket__route--round-trip">
          <div>
            <dt className="ticket_text">HKT - MOW</dt>
            <dd className="ticket_text">11:20 - 00:50</dd>
          </div>
          <div>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">13ч 30м</dd>
          </div>
          <div>
            <dt className="ticket_text">1 пересадка</dt>
            <dd className="ticket_text">HKG</dd>
          </div>
        </dl>
      </li>
      <li className="tickets__list-item tickets__ticket ticket">
        <div className="ticket__container">
          <span className="ticket__price">13 400 Р</span>
          <img src={logo} className="ticket_company-logo" alt="логотип авиакомпании" />
        </div>
        <dl className="ticket__route ticket__route--one-way">
          <div>
            <dt className="ticket_text">MOW - HKT</dt>
            <dd className="ticket_text">10:45 - 08:00</dd>
          </div>
          <div>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">21ч 15м</dd>
          </div>
          <div>
            <dt className="ticket_text">2 пересадки</dt>
            <dd className="ticket_text">HKG, JNB</dd>
          </div>
        </dl>
        <dl className="ticket__route ticket__route--round-trip">
          <div>
            <dt className="ticket_text">HKT - MOW</dt>
            <dd className="ticket_text">11:20 - 00:50</dd>
          </div>
          <div>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">13ч 30м</dd>
          </div>
          <div>
            <dt className="ticket_text">1 пересадка</dt>
            <dd className="ticket_text">HKG</dd>
          </div>
        </dl>
      </li>
      <li className="tickets__list-item tickets__ticket ticket">
        <div className="ticket__container">
          <span className="ticket__price">13 400 Р</span>
          <img src={logo} className="ticket_company-logo" alt="логотип авиакомпании" />
        </div>
        <dl className="ticket__route ticket__route--one-way">
          <div>
            <dt className="ticket_text">MOW - HKT</dt>
            <dd className="ticket_text">10:45 - 08:00</dd>
          </div>
          <div>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">21ч 15м</dd>
          </div>
          <div>
            <dt className="ticket_text">2 пересадки</dt>
            <dd className="ticket_text">HKG, JNB</dd>
          </div>
        </dl>
        <dl className="ticket__route ticket__route--round-trip">
          <div>
            <dt className="ticket_text">HKT - MOW</dt>
            <dd className="ticket_text">11:20 - 00:50</dd>
          </div>
          <div>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">13ч 30м</dd>
          </div>
          <div>
            <dt className="ticket_text">1 пересадка</dt>
            <dd className="ticket_text">HKG</dd>
          </div>
        </dl>
      </li>
      <li className="tickets__list-item tickets__ticket ticket">
        <div className="ticket__container">
          <span className="ticket__price">13 400 Р</span>
          <img src={logo} className="ticket_company-logo" alt="логотип авиакомпании" />
        </div>
        <dl className="ticket__route ticket__route--one-way">
          <div>
            <dt className="ticket_text">MOW - HKT</dt>
            <dd className="ticket_text">10:45 - 08:00</dd>
          </div>
          <div>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">21ч 15м</dd>
          </div>
          <div>
            <dt className="ticket_text">2 пересадки</dt>
            <dd className="ticket_text">HKG, JNB</dd>
          </div>
        </dl>
        <dl className="ticket__route ticket__route--round-trip">
          <div>
            <dt className="ticket_text">HKT - MOW</dt>
            <dd className="ticket_text">11:20 - 00:50</dd>
          </div>
          <div>
            <dt className="ticket_text">В пути</dt>
            <dd className="ticket_text">13ч 30м</dd>
          </div>
          <div>
            <dt className="ticket_text">1 пересадка</dt>
            <dd className="ticket_text">HKG</dd>
          </div>
        </dl>
      </li>
    </ul>
  </section>
);

export default Tickets;
