// Afin de savoir si le magasin fut modifié, React empèche de modifier le magasin directement.
// Pour modifier le magasin dans React, on doit créer un nouveau pointeur, y enregistrer le magasin modifié et retourner ce pointeur
// Redux utilise une fct 'Reducer' qui prend un store + action en argument et retourne un pointeur contenant le store modifié

// Ici, le store contient { cartItems, count, totalPrice } et des fcts pour ajouter, augmenter, diminuer ou suprimer des items ou effacer le cart
// CartItems contient la liste de produits contenu dans le Cart { product, quantity } 

const cartReducer = (state, action) => {
  switch(action.type) {
    default: 
      return state
  }
}

export default cartReducer