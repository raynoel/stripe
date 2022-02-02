// Importé dans index.js pour wrapper 'App' pour rendre les products disponible aux enfants
import React, { createContext, useState } from 'react';
import SHOP_DATA from '../shop/index';                        // importe la liste de produits d'un fichier

export const ProductsContext = createContext();               // Cré le simili-store

// Composant qui rend le simili-store disponible aux enfants
const ProductsContextProvider = ({children}) => {
  const [ products ] = useState(SHOP_DATA)                    // initialise la liste de produits
  return ( 
    <ProductsContext.Provider value={{ products: products }}>           
      { children }
    </ProductsContext.Provider>
   );
}
 
export default ProductsContextProvider;