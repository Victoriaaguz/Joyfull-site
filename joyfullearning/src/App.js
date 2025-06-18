import "./App.css";
import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Home/Navbar";
import Home from "./pages/Home/HomeScreen";
import AboutUs from "./pages/Home/AboutUs";
import Footer from "./pages/Home/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;