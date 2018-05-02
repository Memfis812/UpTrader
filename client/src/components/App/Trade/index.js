import React from 'react';
import './style.scss';
import tradeBg from './trade-bg.jpg';
import TradeHeader from './TradeHeader';
import TradeContent from './TradeContent';

const tradeStyle = {
  backgroundImage: `url(${ tradeBg })`
}

class Trade  extends React.Component {
  render() {
    return (
      <section className="trade" style={tradeStyle}>
        <div className="container">
          <TradeHeader />
          <TradeContent />
        </div>
      </section>
    );
  }
}

export default Trade;