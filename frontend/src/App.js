import { Switch, Route } from 'react-router-dom'
import HomePage from './components/home-page.jsx'
import NotFound from './components/not-found.jsx'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
