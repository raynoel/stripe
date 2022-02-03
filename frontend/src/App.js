import Header from './components/header/header.jsx'
import Hero from './components/hero/hero.jsx'
import MainSection from './components/main-section/main-section.jsx'
import FeatureCollection from './components/featured-collection/featured-collection.jsx'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainSection />
      <FeatureCollection />
    </div>
  );
}

export default App;
