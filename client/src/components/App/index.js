import React from 'react';
import Media from "react-media";
import './style.scss';
import Trade from './Trade';
import Select from './Select';
import SelectMobile from './SelectMobile';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Media query="(max-width: 1200px)">
        {matches =>
          matches ? (
            <div className="mobile-container">
              <SelectMobile />
            </div>
          ) : (
              this.props.isOpen ? <Trade /> : <Select showTrade={this.showTrade} />
            )
        }
      </Media>
    );
  }

  showTrade = (index, parent) => {
    if (index === 0) {
      let promise = new Promise((resolve, reject) => {
        this.props.animElem.classList.add('anim');
        resolve();
      });
      promise.then(() => {
        setTimeout(() => {
          this.props.showTrade(true);
        }, 600)
      });
    } else {
      return;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.tradeReducer.isOpen,
    animElem: state.animElemReducer[0]
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    showTrade: (payload) => {
      dispatch({
        type: 'SHOW_TRADE',
        payload: payload
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

