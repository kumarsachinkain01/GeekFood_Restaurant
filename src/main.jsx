import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav/Nav.jsx';
import './index.css';
import Footer from './components/Footer/Footer.jsx';
import Quotes from './components/QuotesData/Quotes.jsx';
//import Resturant from './components/ResturantData/Resturants.jsx';
import Resturants from './components/Restaurants/Restaurants';
import ImgPart from './components/ImgPart/ImgPart.jsx';
import ThirdPart from './components/ThirdPart/ThirdPart.jsx';
import FourthPart from './components/FourthPart/FourthPart.jsx';
import Restaurants from './components/Restaurants/Restaurants';

function App() {
  const [showQuotes, setShowQuotes] = useState(false);
  const [showResturant, setshowResturant] =  useState(false);

  const handleShowQuotes = () => {
    setShowQuotes(true);
  };

  const handleShowResturant = ()=> {
    setshowResturant(true);
  }

  return (
    <React.StrictMode>
      <Nav 
        onQuoteClick={handleShowQuotes} 
        onResturantsClick={handleShowResturant}
      />

      {showQuotes ? (
        <Quotes /> 
        ) : showResturant ?(
          <Restaurants/>
        ):(
        <>
          <ImgPart />
          <ThirdPart />
          <FourthPart /> 
          <Footer />
        </>
      )}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);