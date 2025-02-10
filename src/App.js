import React from 'react';
import BardAnimation from './components/BardAnimation';
import './App.css';

function App() {
  return (
    <div className="App">
      <BardAnimation speed={3} fontSize={40} color="green" />
    </div>
  );
}

export default App;