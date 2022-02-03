// Carré de 200 px qui affiche un produit unique: Image + nom + prix + bouton 'ADD TO CART'
import React from 'react'
import { withRouter } from 'react-router-dom'
import './featured-product.scss'

// Ce composant doit être appelé avec un produit en param (ex.  <FeaturedProduct {...product} key={product.id} />)
const FeaturedProduct = (props) => {
  const { id, title, imageUrl, price, history } = props

  return (
    <div className='featured-product'>
      <div className='featured-image' onClick={() => history.push(`/product/${id}`)}>
        <img src={imageUrl} alt='product' />
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>$ {price}</p>
        <button className='button is-black nomad-btn'>ADD TO CART</button> 
      </div>
    </div>
  )
}
 
export default withRouter(FeaturedProduct)
