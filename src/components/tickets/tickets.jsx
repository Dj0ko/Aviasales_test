import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../spinner/spinner';
import Sorting from '../sorting/sorting';
import Ticket from '../ticket/ticket';

import * as actions from '../../redux/actions/actions';

import classes from './tickets.module.scss';

const Tickets = ({ ticketsList, loadingState }) => {
  if (ticketsList[0] === 'nothing') {
    return <p className={classes.tickets__info}>Рейсов, подходящих под заданные фильтры, не найдено</p>;
  }

  const allTickets = ticketsList.map((ticket, index) => {
    if (index < 5) {
      return <Ticket ticket={ticket} key={`${ticket.carrier + ticket.price + ticket.segments[0].duration}`} />;
    }
    return '';
  });

  return (
    <section className={classes.tickets}>
      <Sorting />
      {loadingState && <Spinner />}
      <ul>{allTickets}</ul>
    </section>
  );
};

// Функция сортировки билетов
const getSortTickets = (arr, sortingState) => {
  if (!sortingState && sortingState !== null) {
    arr.sort((curr, next) => {
      if (curr.price > next.price) {
        return 1;
      }
      if (curr.price < next.price) {
        return -1;
      }
      return 0;
    });
  }

  if (sortingState && sortingState !== null) {
    arr.sort((curr, next) => {
      if (curr.segments[0].duration > next.segments[0].duration) {
        return 1;
      }
      if (curr.segments[0].duration < next.segments[0].duration) {
        return -1;
      }
      return 0;
    });
  }

  return [...arr];
};

// Функция для фильтрации билетов
const getFilteredTickets = (arr, filter, sorting) => {
  // Если выбраны все галочки или не выбрана ни одна, то рендерится первоначальный список билетов
  if (filter[0] && filter[1] && filter[2] && filter[3] && filter[4]) {
    return getSortTickets(arr, sorting);
  }

  if (!filter[0] && !filter[1] && !filter[2] && !filter[3] && !filter[4]) {
    return ['nothing'];
  }

  // Рендер билетов, в завимости от количества пересадок
  let newArr = [];

  filter.map((element, index) => {
    if (element && index > 0) {
      newArr = [...newArr, ...arr.filter((el) => el.segments[0].stops.length === index - 1)];
    }
    return newArr;
  });

  return getSortTickets(newArr, sorting);
};

const mapStateToProps = (state) => ({
  loadingState: state.loadingReducer,
  ticketsList: getFilteredTickets(state.ticketsReducer, state.filterReducer, state.sortReducer),
});

export default connect(mapStateToProps, actions)(Tickets);

Tickets.defaultProps = {
  ticketsList: [],
  loadingState: false,
};

Tickets.propTypes = {
  ticketsList: PropTypes.arrayOf(PropTypes.objectOf),
  loadingState: PropTypes.bool,
};
