import Header from './components/header/header.jsx'
import Hero from './components/hero/hero.jsx'
import MainSection from './components/main-section/main-section.jsx'
import FeatureCollection from './components/featured-collection/featured-collection.jsx'
import Footer from './components/footer/footer.jsx'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainSection />
      <FeatureCollection />
      <Footer />
    </div>
  );
}

export default App;
