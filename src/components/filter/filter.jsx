import React from 'react';

const Filter = () => (
  <section className="filter">
    <h2 className="filter__title">Количество пересадок</h2>
    <ul className="filter__list">
      <li className="filter__list-item">
        <input className="filter__input visually-hidden" type="checkbox" id="allTransfers"/>
        <label className="filter__label" htmlFor="allTransfers">Все</label>
      </li>
      <li className="filter__list-item">
        <input className="filter__input visually-hidden" type="checkbox" id="withoutTransfers"/>
        <label className="filter__label" htmlFor="withoutTransfers">Без пересадок</label>
      </li>
      <li className="filter__list-item">
        <input className="filter__input visually-hidden" type="checkbox" id="oneTransfer"/>
        <label className="filter__label" htmlFor="oneTransfer">1 пересадка</label>
      </li>
      <li className="filter__list-item">
        <input className="filter__input visually-hidden" type="checkbox" id="twoTransfers"/>
        <label className="filter__label" htmlFor="twoTransfers">2 пересадки</label>
      </li>
      <li className="filter__list-item">
        <input className="filter__input visually-hidden" type="checkbox" id="threeTransfers"/>
        <label className="filter__label" htmlFor="threeTransfers">3 пересадки</label>
      </li>
    </ul>
  </section>
)

export default Filter;