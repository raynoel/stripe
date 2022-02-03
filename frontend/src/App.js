import { Switch, Route } from 'react-router-dom'
import HomePage from './components/home-page.jsx'
import Shop from './components/pages/shop/shop.jsx'                     // Page qui affiche tous les produits en vente 
import SingleProduct from './components/single-product/single-product.jsx'
import NotFound from './components/not-found.jsx'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
