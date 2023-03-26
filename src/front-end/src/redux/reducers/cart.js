const inicialState = {
    products: [{productName: '', id: 0, quantity: 0, price: 0, image: ''}],
    quantity: 0
  };
  
  const recipeDetails = (state = inicialState, action) => {
    switch (action.type) {
    case 'test':
      return ({
        products: action.payload,
      });
    default:
      return state;
    }
  };
  
  export default recipeDetails;