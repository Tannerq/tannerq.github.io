import React from 'react';
import { Banner, Gallery } from '../../common';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Gallery>
        <Gallery.Item>Test</Gallery.Item>
        <Gallery.Item>Test</Gallery.Item>
        <Gallery.Item>Test</Gallery.Item>
      </Gallery>
    </div>
  );
};

export default Home;