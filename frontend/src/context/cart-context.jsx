// Importé dans index.js
// Cart contient { cartItems, count, totalPrice } + les fcts pour ajouter, augmenter, diminuer ou suprimer des items dans le Cart
// CartItems contient la liste de { product, quantity } 
import React, { createContext, useReducer } from 'react';
import cartReducer from './cart-reducer';                                                   // Contient les fcts pour modifier le state

export const CartContext = createContext();                                                 // Cré un simili-store

const initialState = { cartItems: [], itemCount: 0, total: 0 }                              // Initialise un cart vide


const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);    // Array destructuring: assigne la valeur de 'initialState' à 'state' et 'cartReducer' à la fct 'dispatch'

  const contextValues = { ...state }
  
  return (
    <CartContext.Provider value={ contextValues }>
      { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider;