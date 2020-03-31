import React from 'react';
import './App.css';
import UserInterface from "./components/UserInterface";
import QRScript from "./components/QRScript";

function App() {
  return (
    <div className="App">
      <UserInterface />
      <QRScript />
    </div>
  );
}

export default App;
