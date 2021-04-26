import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sorting from '../sorting/sorting';

import * as actions from '../../actions/actions';

import classes from './tickets.module.scss';

const Tickets = ({ ticketsList }) => {
  // Функция для добавления 0 перед значениями состоящими из одной цифры
  const addZero = (data) => {
    if (String(data).length === 1) {
      return `0${data}`;
    }
    return data;
  };

  // Функция для получения количества часов и минут
  const getTime = (value) => {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    return {
      hours,
      minutes,
    };
  };

  // Функция для расстановки правильных окончаний в зависимости от количества пересадок
  const addStops = (data) => {
    switch (data.length) {
      case 0:
        return 'Без пересадок';

      case 1:
        return '1 пересадка';

      default:
        return `${data.length} пересадки`;
    }
  };

  return (
    <section className={classes.tickets}>
      <Sorting />
      <ul>
        {ticketsList.map((ticket, index) => {
          // Получаем цену билета
          const ticketPrice = `${String(ticket.price).substr(0, 2)} ${String(ticket.price).substr(2)} Р`;
          // Получаем логотип авиакомпании
          const ticketAviaLogo = `//pics.avs.io/99/36/${ticket.carrier}.png`;
          // Получаем данные о билете "Туда"
          const oneWayData = ticket.segments[0];
          // Получаем данные о времени билета "Туда"
          const oneWayDate = new Date(oneWayData.date);
          // Получаем продолжительность полёта в минутах и количество пересадок
          const { duration, stops } = oneWayData;
          // Высчитываем время прилёта
          const oneWayDestinationTime = new Date(Date.parse(oneWayDate) + duration * 60000);

          // Получаем данные о билете "Обратно"
          const backWayData = ticket.segments[1];
          // Получаем данные о времени билета "Обратно"
          const backWayDate = new Date(backWayData.date);
          // Получаем продолжительность полёта в минутах и количество пересадок в обратную сторону
          const { duration: durationBack, stops: stopsBack } = backWayData;
          // Высчитываем время прилёта
          const backWayDestinationTime = new Date(Date.parse(backWayDate) + durationBack * 60000);

          if (index < 5) {
            return (
              <li
                className={`${classes.tickets__ticket} ${classes.ticket}`}
                key={`${oneWayData.origin + oneWayData.destination + ticketPrice + stops.join() + stopsBack.join()}`}
              >
                <div className={classes.ticket__container}>
                  <span className={classes.ticket__price}>{ticketPrice}</span>
                  <img src={ticketAviaLogo} alt="логотип авиакомпании" />
                </div>
                <dl className={`${classes.ticket__route} ${classes['ticket__route--one-way']}`}>
                  <div>
                    <dt>
                      {oneWayData.origin} - {oneWayData.destination}
                    </dt>
                    <dd>
                      {`${addZero(oneWayDate.getUTCHours())}:${addZero(oneWayDate.getUTCMinutes())} - 
                    ${addZero(oneWayDestinationTime.getUTCHours())}:${addZero(oneWayDestinationTime.getUTCMinutes())}`}
                    </dd>
                  </div>
                  <div>
                    <dt>В пути</dt>
                    <dd>
                      {getTime(duration).hours}ч {getTime(duration).minutes}м
                    </dd>
                  </div>
                  <div>
                    <dt>{addStops(stops)}</dt>
                    <dd>{stops.length !== 0 ? stops.join(', ') : '-'}</dd>
                  </div>
                </dl>
                <dl className={classes.ticket__route}>
                  <div>
                    <dt>
                      {backWayData.origin} - {backWayData.destination}
                    </dt>
                    <dd>
                      {`${addZero(backWayDate.getUTCHours())}:${addZero(backWayDate.getUTCMinutes())} - 
                    ${addZero(backWayDestinationTime.getUTCHours())}:${addZero(
                        backWayDestinationTime.getUTCMinutes()
                      )}`}
                    </dd>
                  </div>
                  <div>
                    <dt>В пути</dt>
                    <dd>
                      {getTime(durationBack).hours}ч {getTime(durationBack).minutes}м
                    </dd>
                  </div>
                  <div>
                    <dt>{addStops(stopsBack)}</dt>
                    <dd>{stopsBack.length !== 0 ? stopsBack.join(', ') : '-'}</dd>
                  </div>
                </dl>
              </li>
            );
          }
          return '';
        })}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  ticketsList: state.ticketsReducer,
});

export default connect(mapStateToProps, actions)(Tickets);

Tickets.defaultProps = {
  ticketsList: [],
};

Tickets.propTypes = {
  ticketsList: PropTypes.arrayOf(PropTypes.objectOf),
};
