import React from 'react';
// import bannerVideo from './assets/banner.mp4';
// import mobile from './assets/mobile-banner.jpg';
import FullWidthBanner from './components/FullWidthBanner';
import GridRowItems from './components/GridRowItems';
import RowItemSlider from './components/RowItemSlider';
import BannerSlider from './components/BannerSlider';
import YMABII from './components/YMABII';
import MultiRowsItems from './components/MultiRowItems';
import PIPSection from './components/PIPSection';
import ServicesSection from './components/ServicesSection';
import RelatedSearch from './components/RelatedSearch';
import Gallery from './components/Gallery';
import './App.css';



function App() {
  return (
    <div className="App">
      <FullWidthBanner />
      <RowItemSlider />
      <GridRowItems />
      <BannerSlider  />
      <YMABII />
      <MultiRowsItems />
      <PIPSection />
      <ServicesSection />
      <Gallery />
      <RelatedSearch />
    </div>
  );
}

export default App;
