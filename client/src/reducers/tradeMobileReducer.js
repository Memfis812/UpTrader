const initialState = {
  isOpen: false
};

const tradeMobileReducer = ( state = initialState, action ) => {
  switch ( action.type ) {

    case 'SHOW_MOBILE_TRADE' :
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

export default tradeMobileReducer;