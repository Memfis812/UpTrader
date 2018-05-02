import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import icon from './trade-icon-mobile.png';
import arrowUp from './arrow-up.png';
import arrowDown from './arrow-down.png';
import TradeContentMobile from './TradeContentMobile';

class TradeNavItemMobile extends React.Component {
  render() {
    return (
      <div className="nav-item-mobile">
        <ul>
          <li>
            <a href="#" className="nav-item-mobile__link" onClick={this.showMobileTrade}>
              <div className="nav-item-mobile__icon">
                <img src={icon} alt="" />
                <span>Самостоятельно торговать</span>
              </div>
              <div className="nav-item-mobile__btn">
                <img src={ this.props.isOpen ? arrowUp : arrowDown } />
              </div>
            </a>
          </li>
        </ul>
        {
          this.props.isOpen && <TradeContentMobile />
        }
      </div>
    );
  }

  showMobileTrade = () => {
    this.props.showMobileTrade( !this.props.isOpen );
  } 
}

const mapStateToProps = ( state ) => {
  return {
    isOpen: state.tradeMobileReducer.isOpen,
    state: state
  }
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    showMobileTrade: ( payload ) => {
      dispatch({
        type: 'SHOW_MOBILE_TRADE',
        payload: payload
      });
    }
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( TradeNavItemMobile );