import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
};
export default App;










