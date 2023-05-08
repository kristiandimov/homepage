import React from "react";
import {
  Footer,
  Blog,
  Features,
  WhatGPT3,
  Header,
  Possibility,
} from "./containers";

import {
  CTA,
  Brand,
  Navbar
} from './components'

import './App.css'
import './index.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
};

export default App;
