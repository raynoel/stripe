// '/product/:id' affiche une page contenant les détails d'un sac en magasin
import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import { ProductsContext } from '../../context/products-context';           // simili-store contenant la DB
import Layout from '../shared/layout';
import './single-product.scss';

const SingleProduct = ({ match, history: { push } }) => {                   // Match obtient les params passé dans le url; history redirige
  const { products } = useContext(ProductsContext);                         // Obtient la liste des produits 
  const { id } = match.params;                                              // Extrait le 'id' du URL
  const [ product, setProduct ] = useState(null);                           // Obtient l'obj contenant le produit à afficher
  
  // useEffect utilisé pour obtenir les infos du sac de la DB lorsque le composant mount, rafraichi si id, product, products, push est modifié
  useEffect(() => {
    const product = products.find(item => Number(item.id) === Number(id));  // Cherche le produit 
    if (!product) return push('/shop');
    setProduct(product);
  }, [id, product, push, products]);

  if (!product) return null;                                                // Attend que useEffect aie terminé sa recherche

  const { imageUrl, title, price, description } = product;

  return (
    <Layout>
      <div className='single-product-container'>
        {/* image à gauche*/}
        <div className='product-image'>
          <img src={imageUrl} alt='product' />
        </div>
        {/* boutons + texte a droite */}
        <div className='product-details'>
          <h1>{ title }</h1>
          <p>${ price }</p>
          <div className='add-to-cart-btns'>
            <button className='button is-black nomad-btn' id='btn-white-outline'>ADD TO CART</button>
            <button className='button is-black nomad-btn' id='btn-white-outline'>PROCEED TO CHECKOUT</button>
          </div>
          <div className='product-description'>
            <p>{ description }</p>
          </div>
        </div>

      </div>
    </Layout>
  )
}
export default withRouter(SingleProduct);

