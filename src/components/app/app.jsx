import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from '../filter/filter';
import Tickets from '../tickets/tickets';
import classes from './app.module.scss';
import aviasalesDBService from '../../services/services';
import { ticketsFetchDataSuccess, hasSpinner, noSpinner } from '../../redux/actions/actions';

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

const mapDispatchToProps = (dispatch) => {
  function getAllTickets(id) {
    return aviasalesDBService
      .getTickets(id)
      .then((data) => {
        if (!data.body.stop) {
          dispatch(ticketsFetchDataSuccess(data.body.tickets));
          dispatch(hasSpinner());
          return getAllTickets(data.searchId, dispatch);
        }
        if (data.body.stop) {
          dispatch(noSpinner());
          dispatch(ticketsFetchDataSuccess(data.body.tickets));
        }
        return data.body.tickets;
      })
      .catch((err) => {
        if (err instanceof SyntaxError) {
          getAllTickets(id, dispatch);
        }
      });
  }
  return {
    ticketsFetchData: () => {
      aviasalesDBService.getSearchId().then(({ searchId }) => {
        getAllTickets(searchId);
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(App);

App.defaultProps = {
  ticketsFetchData: () => {},
};

App.propTypes = {
  ticketsFetchData: PropTypes.func,
};
