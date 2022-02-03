// Importé dans index.js
// CartContext contient { cartItems, count, totalPrice } + les fcts pour modifier ces variables
// CartItems contient la liste des produits contenus dans le Cart { product, quantity } 
import React, { createContext, useReducer } from 'react';
import cartReducer from './cart-reducer';                                                   // Contient les fcts pour modifier le state

export const CartContext = createContext();                                                 // Cré un simili-store

const initialState = { cartItems: [], itemCount: 0, total: 0 }                              // Initialise le simili-store CartContext vide


const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);                          // Array destructuring: assigne la valeur de 'initialState' à 'state' et 'cartReducer' à la fct 'dispatch'

  const addProduct    = ( product ) => dispatch({ type: 'ADD_ITEM', payload: product });    // fct pour ajouter au simili-store
  
  const contextValues = { ...state, addProduct }
  
  return (
    <CartContext.Provider value={ contextValues }>
      { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider;