import React from 'react';
import icon from './invest-icon-mobile.png';
import arrowDown from './arrow-down.png';

class InvestNavItemMobile extends React.Component {
  render() {
    return (
      <div className="nav-item-mobile">
        <ul>
          <li>
            <a href="#" className="nav-item-mobile__link">
              <div className="nav-item-mobile__icon">
                <img src={icon} alt="" />
                <span>Инвестировать</span>
              </div>
              <div className="nav-item-mobile__btn">
                <img src={arrowDown} />
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default InvestNavItemMobile;