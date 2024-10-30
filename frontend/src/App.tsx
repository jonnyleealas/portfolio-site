import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Blog from './components/blog/Blog'
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
        {/* <Main /> */}
        <Blog />
        <Footer />
      </div>
    </Router>
  );
};


export default App;
