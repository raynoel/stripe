// Carré de 200 px qui affiche un produit unique: Image + nom + prix + bouton 'ADD TO CART'
import React, { useContext} from 'react'
import { isInCart } from '../../helpers.js'
import { CartContext } from '../../context/cart-context'
import { withRouter } from 'react-router-dom'
import './featured-product.scss'

// Ce composant doit être appelé avec un produit en param (ex.  <FeaturedProduct {...product} key={product.id} />)
const FeaturedProduct = (props) => {
  const { id, title, imageUrl, price, description, history } = props
  const { cartItems, addProduct, increase } = useContext(CartContext)               // importe cartItems + les fcts
  const product = { id, title, imageUrl, price, description }                       // Recré l'obj 'product' pour le passer à isInCart() et addProduct() et increase()
  const itemInCart = isInCart(product, cartItems)

  return (
    <div className='featured-product'>
      <div className='featured-image' onClick={() => history.push(`/product/${id}`)}>
        <img src={imageUrl} alt='product' />
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>$ {price}</p>
        { !itemInCart && <button onClick={() => addProduct(product)} className='button is-black nomad-btn'>ADD TO CART</button> }
        {  itemInCart && <button onClick={() => increase(product)}   className='button is-white nomad-btn' id='btn-white-outline' >ADD MORE</button> }
      </div>
    </div>
  )
}
 
export default withRouter(FeaturedProduct)
