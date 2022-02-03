import React from 'react';
import Layout from './shared/layout';                                                    // Wrapper contenant un Header & Footer
import Hero from './hero/hero';
import MainSection from './main-section/main-section';
import FeaturedCollection from './featured-collection/featured-collection';

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <MainSection />
        <FeaturedCollection />
      </Layout>
    </>
  )
}

export default HomePage;