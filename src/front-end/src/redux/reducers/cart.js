const inicialState = {
    productsCart: [{productName: '', id: 0, quantity: 0, price: 0, image: ''}],
    quantity: 0
  };
  
  const recipeDetails = (state = inicialState, action) => {
    switch (action.type) {
    case 'addCart':
      return ({
          productsCart: action.payload.productsCart,
          quantity: action.payload.quantity,
      });
    default:
      return state;
    }
  };
  
  export default recipeDetails;