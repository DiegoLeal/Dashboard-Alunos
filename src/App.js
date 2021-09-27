import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header";
import Routes from "./routes";
import GloblalStyles from "./styles/GloblalStyles";

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes />    
      <GloblalStyles />
    </BrowserRouter>
  );
}

export default App;
