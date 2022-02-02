// Importé dans le composant header
// Affiche un icone de shopping-bag + une bulle contenant le nb d'items dans le cart
// Nous redirige vers '/cart' lorsqu'on clique dessus
import React from 'react';
import shoppingBag from '../../assets/shopping-bag.png';      
import './cart-icon.scss';

const CartIcon = () => {
  return (
    <div className='cart-container'>
      <img src={shoppingBag} alt='shopping-cart-icon' />
      <span className='cart-count'> 5 </span>                       {/* Affiche la qty si itemCount > 0 */}
    </div>
  );
}

export default CartIcon;  