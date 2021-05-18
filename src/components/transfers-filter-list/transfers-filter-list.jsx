import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TransferFilter from '../transfer-filter/transfer-filter';

import * as actions from '../../redux/actions/actions';
import classes from './transfers-filter-list.module.scss';

const TransfersFilterList = ({
  transferFilter,
  showAllTransfers,
  showWithoutTransfers,
  showOneTransfer,
  showTwoTransfers,
  showThreeTransfers,
}) => {
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
      checked: allTransfersCheck,
    },
    {
      label: 'Без пересадок',
      id: 'withoutTransfers',
      actionCreator: showWithoutTransfers,
      checked: withoutTransfersCheck,
    },
    {
      label: '1 пересадка',
      id: 'oneTransfer',
      actionCreator: showOneTransfer,
      checked: oneTransferCheck,
    },
    {
      label: '2 пересадки',
      id: 'twoTransfers',
      actionCreator: showTwoTransfers,
      checked: twoTransfersCheck,
    },
    {
      label: '3 пересадки',
      id: 'threeTransfers',
      actionCreator: showThreeTransfers,
      checked: threeTransfersCheck,
    },
  ];

  const transfersFilters = transfersArr.map((filter) => <TransferFilter {...filter} key={filter.label} />);

  return <ul className={classes.filter__list}>{transfersFilters}</ul>;
};

const mapStateToProps = (state) => ({
  transferFilter: state.filterReducer,
});

export default connect(mapStateToProps, actions)(TransfersFilterList);

TransfersFilterList.defaultProps = {
  transferFilter: [true, true, true, true, true],
  showAllTransfers: () => {},
  showWithoutTransfers: () => {},
  showOneTransfer: () => {},
  showTwoTransfers: () => {},
  showThreeTransfers: () => {},
};

TransfersFilterList.propTypes = {
  transferFilter: PropTypes.arrayOf(PropTypes.bool),
  showAllTransfers: PropTypes.func,
  showWithoutTransfers: PropTypes.func,
  showOneTransfer: PropTypes.func,
  showTwoTransfers: PropTypes.func,
  showThreeTransfers: PropTypes.func,
};
