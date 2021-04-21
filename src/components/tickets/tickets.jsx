import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/actions';

import classes from './tickets.module.scss';
import logo from './logo-airline.png';

const Tickets = ({ classButtonCheapest, classButtonFastest, showCheapest, showFastest }) => (
  <section className={classes.tickets}>
    <div>
      <button type="button" className={classButtonCheapest} onClick={showCheapest}>
        Самый дешевый
      </button>
      <button type="button" className={classButtonFastest} onClick={showFastest}>
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

const mapStateToProps = (state) => {
  if (!state.sortReducer) {
    return {
      classButtonCheapest: `${classes.button} ${classes['button--cheapest']} ${classes['button--active']}`,
      classButtonFastest: `${classes.button} ${classes['button--fastest']}`,
    };
  }

  return {
    classButtonCheapest: `${classes.button} ${classes['button--cheapest']}`,
    classButtonFastest: `${classes.button} ${classes['button--fastest']} ${classes['button--active']}`,
  };
};

export default connect(mapStateToProps, actions)(Tickets);

Tickets.defaultProps = {
  classButtonCheapest: `${classes.button} ${classes['button--cheapest']} ${classes['button--active']}`,
  classButtonFastest: `${classes.button} ${classes['button--fastest']}`,
  showCheapest: () => {},
  showFastest: () => {},
};

Tickets.propTypes = {
  classButtonCheapest: PropTypes.string,
  classButtonFastest: PropTypes.string,
  showCheapest: PropTypes.func,
  showFastest: PropTypes.func,
};
