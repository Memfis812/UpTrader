import React from 'react';
import { connect } from 'react-redux';
import NavItem from './NavItem';
import tradeIcon from './NavItem/trade-icon.png';
import investIcon from './NavItem/invest-icon.png';
import attractInvestIcon from './NavItem/attract-icon.png';
import selectBg from './select-bg.jpg';
import './style.scss';

const selectStyle = {
  backgroundImage: `url(${ selectBg })`
}

const navItemContent = [
  {
    icon: tradeIcon,
    title: 'Торговать'
  },
  {
    icon: investIcon,
    title: 'Инвестировать'
  },
  {
    icon: attractInvestIcon,
    title: 'Привлекать инвесторов'
  }
];

class Select extends React.Component {
  render() {
    return (
      <section className="select" style={selectStyle}>
        <div className="container" ref="container">
          <h1 className="select__title" >Выберете способ заработка</h1>
          <nav className="select__nav">
            {
              navItemContent.map(( item, index ) => (
                <NavItem 
                  key={index} 
                  index={index}
                  icon={item.icon} 
                  title={item.title}
                  showTrade={this.props.showTrade}
                />
              ))
            }
          </nav>
        </div>
      </section>
    );
  }

  componentDidMount() {
    this.props.addAnimEl( this.refs.container );
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    addAnimEl: ( payload ) => {
      dispatch({
        type: 'ADD_ELEM',
        payload: payload
      })
    }
  };
};

export default connect( null, mapDispatchToProps )( Select )