import React from 'react';
import './Home.css';

import Header from '../components/Header/Header';
import Herosection from '../components/HeroSection/Herosection';
import Trustbar from '../components/TrustBar/Trustbar';
import Categories from '../components/Categories/Categories';
import Trendingnow from '../components/TrendingNow/Trendingnow';
import Flashsale from '../components/FlashSale/Flashsale';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div className="home">
      <Header />
      <Herosection />
      <Trustbar />
      <Categories />
      <Trendingnow />
      <Flashsale />
      <Footer />
    </div>
  );
}

export default Home;
