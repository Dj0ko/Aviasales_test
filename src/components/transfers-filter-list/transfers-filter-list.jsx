import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TransferFilter from '../transfer-filter/transfer-filter';

import * as actions from '../../redux/actions/actions';
import classes from './transfers-filter-list.module.scss';

const TransfersFilterList = ({ transferFilter, showAllTransfers, changeFilter }) => {
  const [
    allTransfersCheck,
    withoutTransfersCheck,
    oneTransferCheck,
    twoTransfersCheck,
    threeTransfersCheck,
  ] = transferFilter;

  const transfersArr = [
    {
      label: 'Все',
      id: 'allTransfers',
      actionCreator: showAllTransfers,
      checked:
        allTransfersCheck || (withoutTransfersCheck && oneTransferCheck && twoTransfersCheck && threeTransfersCheck),
    },
    {
      label: 'Без пересадок',
      id: 'withoutTransfers',
      actionCreator: changeFilter,
      checked: withoutTransfersCheck,
    },
    {
      label: '1 пересадка',
      id: 'oneTransfer',
      actionCreator: changeFilter,
      checked: oneTransferCheck,
    },
    {
      label: '2 пересадки',
      id: 'twoTransfers',
      actionCreator: changeFilter,
      checked: twoTransfersCheck,
    },
    {
      label: '3 пересадки',
      id: 'threeTransfers',
      actionCreator: changeFilter,
      checked: threeTransfersCheck,
    },
  ];

  const transfersFilters = transfersArr.map((filter, index) => (
    <TransferFilter {...filter} index={index} key={filter.label} />
  ));

  return <ul className={classes.filter__list}>{transfersFilters}</ul>;
};

const mapStateToProps = (state) => ({
  transferFilter: state.filterReducer,
});

export default connect(mapStateToProps, actions)(TransfersFilterList);

TransfersFilterList.defaultProps = {
  transferFilter: [true, true, true, true, true],
  changeFilter: () => {},
  showAllTransfers: () => {},
};

TransfersFilterList.propTypes = {
  transferFilter: PropTypes.arrayOf(PropTypes.bool),
  changeFilter: PropTypes.func,
  showAllTransfers: PropTypes.func,
};
