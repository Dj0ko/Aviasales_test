import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from '../filter/filter';
import Tickets from '../tickets/tickets';
import classes from './app.module.scss';
import * as actions from '../../actions/actions';

const App = ({ ticketsFetchData }) => {
  useEffect(ticketsFetchData, [ticketsFetchData]);

  return (
    <main className={classes['page-main']}>
      <h1 className={classes['visually-hidden']}>Поиск билетов</h1>
      <Filter />
      <Tickets />
    </main>
  );
};

const mapStateToProps = (state) => ({
  tickets: state.ticketsReducer,
});

export default connect(mapStateToProps, actions)(App);

App.defaultProps = {
  ticketsFetchData: () => {},
};

App.propTypes = {
  ticketsFetchData: PropTypes.func,
};
