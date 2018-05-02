import React from 'react';
import './style.scss';

class TradeHeader extends React.Component {
  render() {
    return (
      <div className="trade-header">
        <a href="#" className="trade-header__nav-item trade-header__nav-item_active">Торговать</a>
        <a href="#" className="trade-header__nav-item">Инвестировать</a>
        <a href="#" className="trade-header__nav-item">Привлекать инвесторов</a>
      </div>
    );
  }
}

export default TradeHeader;