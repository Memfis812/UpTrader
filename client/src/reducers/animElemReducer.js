const initialState = [];

const animElemReducer = ( state = initialState, action ) => {
  switch ( action.type ) {

    case 'ADD_ELEM' :
    state.isOpen = action.payload;
      return [
        ...state,
        action.payload
      ]
      break;

    default : 
      return [
        ...state
      ]
      break;
  }
};

export default animElemReducer;