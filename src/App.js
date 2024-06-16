import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './components/Product/Product';
import Save from './components/Save/Save';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/save' element={<Save/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
