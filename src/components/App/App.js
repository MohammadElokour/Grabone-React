import React from 'react';
import './App.css';
import Card from '../Card/Card';
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import MobileNavbar from '../MobileNavbar/MobileNavbar'
import Imagebanner from '../Imagebanner/Imagebanner'
import Emailbanner from '../EmailBanner/EmailBanner'
import Footer from '../Footer/Footer'
import data from '../../data.json'


function App() {
  const cards = data.cards;
  return (
    <div className="App">
      <div><Header/></div>
      <div className="sticky top-0 z-10"><Navbar/></div>
      <div className="page">
        <div className="">
          <Imagebanner/>
        </div>
        <div className="pt-4 sm:pt-4 md:pt-6 lg:pt-10 xl:pt-10 text-center">
        {cards.map((card, i) => (
          <Card key={i} title={card.title} img={card.img} institution={card.institution} area={card.area} boughtCount={card.boughtCount} price={card.price} infoText={card.infoText}/>
          ))}
        </div>
        <div className="pb-5">
          <Emailbanner/>
        </div>
        <div className="pt-4 sm:pt-4 md:pt-6 lg:pt-0 xl:pt-0 text-center">
        {cards.map((card, i) => (
          <Card key={i} title={card.title} img={card.img} institution={card.institution} area={card.area} boughtCount={card.boughtCount} price={card.price} infoText={card.infoText}/>
          ))}
        </div>
      </div>
      <div className="mt-5"><Footer/></div>
      <div className="sticky bottom-0 z-10"><MobileNavbar/></div>
   </div>
  );
}

export default App;
