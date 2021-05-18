import React from 'react';
import TransferFilter from '../transfer-filter/transfer-filter';

const TransfersFilterList = () => {
  const sss = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
  const transfersFilters = sss.map((filterName) => <TransferFilter filterName={filterName} />);

  return <ul>{transfersFilters}</ul>;
};

export default TransfersFilterList;
