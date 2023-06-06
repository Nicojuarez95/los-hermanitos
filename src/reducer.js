export const initialState = {
  basket: [],
  user: null,
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_ITEM",
  SET_USER: "SET_USER",
  EMPTY_BASKET: "EMPTY_BASKET",
  SET_QUANTITY: "SET_QUANTITY", // Agregamos la acción SET_QUANTITY
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((total, item) => total + item.price * item.quantity, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case actionTypes.REMOVE_ITEM:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("No se puede remover el producto");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.EMPTY_BASKET:
      return {
        ...state,
        basket: action.basket,
      };
    case actionTypes.SET_QUANTITY: // Agregamos el caso para la acción SET_QUANTITY
      return {
        ...state,
        basket: state.basket.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              quantity: action.quantity,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default reducer;