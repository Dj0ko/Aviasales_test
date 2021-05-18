import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../spinner/spinner';
import Sorting from '../sorting/sorting';
import TicketsList from '../tickets-list/tickets-lsit';

import * as actions from '../../redux/actions/actions';

import classes from './product.module.scss';

const Product = ({ loadingState }) => (
  <section className={classes.product}>
    <Sorting />
    {loadingState && <Spinner />}
    <TicketsList />
  </section>
);

const mapStateToProps = (state) => ({
  loadingState: state.loadingReducer,
});

export default connect(mapStateToProps, actions)(Product);

Product.defaultProps = {
  loadingState: false,
};

Product.propTypes = {
  loadingState: PropTypes.bool,
};
