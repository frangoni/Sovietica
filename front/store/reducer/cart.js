const initialState={
    products : []
}

export default (state = initialState, action) => {
    switch(action.type) {
      case 'TRAER_CARRITO':
        return {...state, products : action.products};
      default:
        return state;
    }
}