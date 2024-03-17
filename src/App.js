import React, { useState } from 'react';
import Navbar from './Navbar';
import Body from './Body';
import ShopListBody from './ShopListBody';
import Footer from './Footer';
import './App.css';

function App() {
  const [showBody, setShowBody] = useState(true); // State to manage component display (true for Body, false for ShopListBody)

  const handleSearchClick = () => {
    setShowBody(false); // Show ShopListBody when search is clicked
  };

  const handleLogoClick = () => {
    setShowBody(true); // Show Body when logo is clicked
  };

  return (
    <div className="app-container">
      <div className="content">
        <Navbar onSearchClick={handleSearchClick} onLogoClick={handleLogoClick} /> {/* Pass onLogoClick handler */}
        {showBody ? <Body /> : <ShopListBody />}
      </div>
      <Footer />
    </div>
  );
}

export default App;