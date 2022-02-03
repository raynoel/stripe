// Importé dans le composant header
// Affiche un icone de shopping-bag + une bulle contenant le nb d'items dans le cart
// Nous redirige vers '/cart' lorsqu'on clique dessus
import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context'                        
import shoppingBag from '../../assets/shopping-bag.png';      
import './cart-icon.scss';

const CartIcon = () => {
  const { itemCount } = useContext(CartContext)                               // Obtient le nb d'article contenus dans le cart

  return (
    <div className='cart-container'>
      <img src={shoppingBag} alt='shopping-cart-icon' />
      { itemCount > 0 ? <span className='cart-count'> { itemCount } </span> : null }   {/* Affiche la qty si itemCount > 0 */}
    </div>
  );
}

export default CartIcon;  