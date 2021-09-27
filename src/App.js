import React from "react";
import { Router } from 'react-router-dom';
import Header from "./components/Header";
import Routes from "./routes";
import GloblalStyles from "./styles/GloblalStyles";

function App() {
  return (
    <Router>
      <Header /> 
      <Routes />    
      <GloblalStyles />
    </Router>
  );
}

export default App;
