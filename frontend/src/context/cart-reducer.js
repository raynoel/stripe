// Afin de savoir si le magasin fut modifié, React empèche de modifier le magasin directement.
// Pour modifier le magasin dans React, on doit créer un nouveau pointeur, y enregistrer le magasin modifié et retourner ce pointeur
// Redux utilise une fct 'Reducer' qui prend un store + action en argument et retourne un pointeur contenant le store modifié

// Ici, le store contient { cartItems, count, totalPrice } et des fcts pour ajouter, augmenter, diminuer ou suprimer des items ou effacer le cart
// CartItems contient la liste de produits contenu dans le Cart { product, quantity } 

// Retourne un objet contenant le nb d'items dans le panier + prix total { itemCount: 0, total: 0 }
export const sumItems = (cartItems) => {
  return {
    itemCount: cartItems.reduce((total, prod) => total + prod.quantity , 0),                // nb d'items dans le panier: parcours la liste et additionne les qty 
    total: cartItems.reduce((total, prod) => total + (prod.price * prod.quantity), 0)       // Prix total: parcours la liste et additionne le prix de produits
  }
}

// Élabore les fcts pour modifier CartContext
const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      if (!state.cartItems.find(item => item.id === action.payload.id)) {                   // si le produit n'est pas dans le panier
        state.cartItems.push({ ...action.payload, quantity: 1, })                           // Ajoute un item à la liste cartItems
      }
      return { ...state, cartItems: [...state.cartItems], ...sumItems(state.cartItems) }    // Retourne le store CartContext modifié
    default: 
      return state
  }
}

export default cartReducer