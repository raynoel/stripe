// Contient des fcts utilisées par plusieurs composants

// Vérifie si le produit est dans le cart -- isInCart(product, cartItems). Utilisé pour afficher "ADD IN CART" ssi l'item n'est pas dans le cart
export const isInCart = (product, cartItems) => {
  return cartItems.find(item => item.id === product.id);
}
