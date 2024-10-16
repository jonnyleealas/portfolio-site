import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/Main';
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className='app'>
        <Header className="header" />
        <Main className="main" />
        <Footer className="footer" />
      </div>
    </Router>
  );
};


export default App;
