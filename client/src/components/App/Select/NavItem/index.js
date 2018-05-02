import React from 'react';
import './style.scss';
import icon from './trade-icon.png';

class NavItem extends React.Component {
  render() {
    return (
      <div className="nav-item" onClick={this.props.showTrade.bind( this, this.props.index )}>
        <div className="nav-item__circle">
          <img src={this.props.icon} alt="trade-icon"/>
          <p className="nav-item__title">{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default NavItem;