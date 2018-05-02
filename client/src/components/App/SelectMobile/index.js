import React from 'react';
import { connect } from 'react-redux';
import TradeNavItemMobile from './TradeNavItemMobile';
import InvestNavItemMobile from './InvestNavItemMobile';
import AttractNavItemMobile from './AttractNavItemMobile';
import './style.scss';
import tradeMobileBg from './trade-mobile-bg.jpg';
import selectMobileBg from './select-mobile-bg.jpg';

const selectMobileStyle = {
  backgroundImage: `url(${ selectMobileBg })`
}

class SelectMobile extends React.Component {
  render() {
    return (
      <div className="select-mobile" style={this.props.isOpen ? null : selectMobileStyle}>
        <h1 className="select-mobile__title">Выберете способ заработка</h1>
        <TradeNavItemMobile />
        {
          this.props.isOpen && <img src={tradeMobileBg} alt="img" className="trade-mobile-bg"/>
        }
        <InvestNavItemMobile />
        <AttractNavItemMobile />
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    isOpen: state.tradeMobileReducer.isOpen
  }
};

export default connect( mapStateToProps, null )( SelectMobile );