import React from 'react';

import classes from './tickets.module.scss';
import logo from './logo-airline.png';

const Tickets = () => (
  <section className={classes.tickets}>
    <div>
      <button type="button" className={`${classes.button} ${classes['button--active']} ${classes['button--cheapest']}`}>
        Самый дешевый
      </button>
      <button type="button" className={`${classes.button} ${classes['button--fastest']}`}>
        Самый быстрый
      </button>
    </div>
    <ul>
      <li className={`${classes.tickets__ticket} ${classes.ticket}`}>
        <div className={classes.ticket__container}>
          <span className={classes.ticket__price}>13 400 Р</span>
          <img src={logo} alt="логотип авиакомпании" />
        </div>
        <dl className={`${classes.ticket__route} ${classes['ticket__route--one-way']}`}>
          <div>
            <dt>MOW - HKT</dt>
            <dd>10:45 - 08:00</dd>
          </div>
          <div>
            <dt>В пути</dt>
            <dd>21ч 15м</dd>
          </div>
          <div>
            <dt>2 пересадки</dt>
            <dd>HKG, JNB</dd>
          </div>
        </dl>
        <dl className={classes.ticket__route}>
          <div>
            <dt>HKT - MOW</dt>
            <dd>11:20 - 00:50</dd>
          </div>
          <div>
            <dt>В пути</dt>
            <dd>13ч 30м</dd>
          </div>
          <div>
            <dt>1 пересадка</dt>
            <dd>HKG</dd>
          </div>
        </dl>
      </li>
      <li className={`${classes.tickets__ticket} ${classes.ticket}`}>
        <div className={classes.ticket__container}>
          <span className={classes.ticket__price}>13 400 Р</span>
          <img src={logo} alt="логотип авиакомпании" />
        </div>
        <dl className={`${classes.ticket__route} ${classes['ticket__route--one-way']}`}>
          <div>
            <dt>MOW - HKT</dt>
            <dd>10:45 - 08:00</dd>
          </div>
          <div>
            <dt>В пути</dt>
            <dd>21ч 15м</dd>
          </div>
          <div>
            <dt>2 пересадки</dt>
            <dd>HKG, JNB</dd>
          </div>
        </dl>
        <dl className={classes.ticket__route}>
          <div>
            <dt>HKT - MOW</dt>
            <dd>11:20 - 00:50</dd>
          </div>
          <div>
            <dt>В пути</dt>
            <dd>13ч 30м</dd>
          </div>
          <div>
            <dt>1 пересадка</dt>
            <dd>HKG</dd>
          </div>
        </dl>
      </li>
      <li className={`${classes.tickets__ticket} ${classes.ticket}`}>
        <div className={classes.ticket__container}>
          <span className={classes.ticket__price}>13 400 Р</span>
          <img src={logo} alt="логотип авиакомпании" />
        </div>
        <dl className={`${classes.ticket__route} ${classes['ticket__route--one-way']}`}>
          <div>
            <dt>MOW - HKT</dt>
            <dd>10:45 - 08:00</dd>
          </div>
          <div>
            <dt>В пути</dt>
            <dd>21ч 15м</dd>
          </div>
          <div>
            <dt>2 пересадки</dt>
            <dd>HKG, JNB</dd>
          </div>
        </dl>
        <dl className={classes.ticket__route}>
          <div>
            <dt>HKT - MOW</dt>
            <dd>11:20 - 00:50</dd>
          </div>
          <div>
            <dt>В пути</dt>
            <dd>13ч 30м</dd>
          </div>
          <div>
            <dt>1 пересадка</dt>
            <dd>HKG</dd>
          </div>
        </dl>
      </li>
      <li className={`${classes.tickets__ticket} ${classes.ticket}`}>
        <div className={classes.ticket__container}>
          <span className={classes.ticket__price}>13 400 Р</span>
          <img src={logo} alt="логотип авиакомпании" />
        </div>
        <dl className={`${classes.ticket__route} ${classes['ticket__route--one-way']}`}>
          <div>
            <dt>MOW - HKT</dt>
            <dd>10:45 - 08:00</dd>
          </div>
          <div>
            <dt>В пути</dt>
            <dd>21ч 15м</dd>
          </div>
          <div>
            <dt>2 пересадки</dt>
            <dd>HKG, JNB</dd>
          </div>
        </dl>
        <dl className={classes.ticket__route}>
          <div>
            <dt>HKT - MOW</dt>
            <dd>11:20 - 00:50</dd>
          </div>
          <div>
            <dt>В пути</dt>
            <dd>13ч 30м</dd>
          </div>
          <div>
            <dt>1 пересадка</dt>
            <dd>HKG</dd>
          </div>
        </dl>
      </li>
      <li className={`${classes.tickets__ticket} ${classes.ticket}`}>
        <div className={classes.ticket__container}>
          <span className={classes.ticket__price}>13 400 Р</span>
          <img src={logo} alt="логотип авиакомпании" />
        </div>
        <dl className={`${classes.ticket__route} ${classes['ticket__route--one-way']}`}>
          <div>
            <dt>MOW - HKT</dt>
            <dd>10:45 - 08:00</dd>
          </div>
          <div>
            <dt>В пути</dt>
            <dd>21ч 15м</dd>
          </div>
          <div>
            <dt>2 пересадки</dt>
            <dd>HKG, JNB</dd>
          </div>
        </dl>
        <dl className={classes.ticket__route}>
          <div>
            <dt>HKT - MOW</dt>
            <dd>11:20 - 00:50</dd>
          </div>
          <div>
            <dt>В пути</dt>
            <dd>13ч 30м</dd>
          </div>
          <div>
            <dt>1 пересадка</dt>
            <dd>HKG</dd>
          </div>
        </dl>
      </li>
    </ul>
  </section>
);

export default Tickets;
