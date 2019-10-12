import React from 'react';
import './App.css';
import RomanForm from './RomanForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Covert your number into a Roman Numeral</h1>
        <RomanForm />
      </header>
    </div>
  );
}

export default App;
