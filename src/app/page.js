import React from 'react'
import RootLayout from './layout';
import Header from '@/Components/Header';
import Intro from '@/Components/Intro';
import Cards from '@/Components/Cards';
import Offers from '@/Components/Offers';
import Overview from '@/Components/Overview';
import Level from '@/Components/Level';
import Faqs from '@/Components/Faqs';
import Footer from '@/Components/Footer';

const page = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Cards />
      <Offers />
      <Overview />
      <Level />
      <Faqs />
      <Footer />


    </div>
  )
}

export default page;
