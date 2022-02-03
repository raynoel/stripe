// Wrapper importé dans différents composants pour insérer le Header et Footer
// Utile pour afficher du Header et Footer optionnel
import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <main>
          { children }
        </main>
      <Footer />
    </>
  );
}

export default Layout;