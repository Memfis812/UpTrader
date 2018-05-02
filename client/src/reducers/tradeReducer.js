const initialState = {
  isOpen: false
};

const tradeReducer = ( state = initialState, action ) => {
  switch ( action.type ) {

    case 'SHOW_TRADE' :
    state.isOpen = action.payload;
      return {
        ...state
      }
      break;

    default : 
      return {
        ...state
      }
      break;
  }
};

export default tradeReducer;