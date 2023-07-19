import React from "react";
import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';



function App() {

 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/review" element={<Review/>} />
        <Route path="/inventory" element={<Inventory/>} />
      </Routes>
    </Router>
  );
}

export default App;
