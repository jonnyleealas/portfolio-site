import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  return (
    <Router>
      <div className='app'>
    <Header /> 
    <Main />
    <Footer />
      </div>
    </Router>
  );
};


export default App;
