// import necessary components and tools
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import PortfolioContainer from './components/PortfolioContainer';

// app function to organize components in correct manner in div element
function App () { 
  return ( 
  <div>
    <Header />
    <PortfolioContainer />
    <Footer />
  </div>
  );
}
// exporting app function here
export default App;
