// Carré de 200 px qui affiche un produit unique: Image + nom + prix + bouton 'ADD TO CART'
import React from 'react'
import './featured-product.scss'

// Ce composant doit être appelé avec un produit en param (ex.  <FeaturedProduct {...product} key={product.id} />)
const FeaturedProduct = (product) => {
  const { title, imageUrl, price } = product

  return (
    <div className='featured-product'>
      <div className='featured-image'>
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
 
export default FeaturedProduct
