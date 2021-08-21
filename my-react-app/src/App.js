import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import PagesLinks from './pages/PagesLinks';
import PagesRouter from './pages/PagesRouter';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <PagesLinks/>
      <PagesRouter/>
      <Footer/>
     
    </div>
  );
}

export default App;