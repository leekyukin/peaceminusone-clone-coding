import './App.css';
import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import './style.css';
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      {/*<Footer/>*/}
    </div>
  );
}

export default App;
