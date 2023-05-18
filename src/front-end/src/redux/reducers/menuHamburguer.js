import { MENU } from "../actions/menuHamburguer";

const inicialState = {
    isOpen: false
  };
  
  const menuHamburguer = (state = inicialState, action) => {
    switch (action.type) {
    case MENU:
      return ({
          isOpen: action.payload,
      });
    default:
      return state;
    }
  };
  
  export default menuHamburguer;