import React from 'react';
import logo from './logo.svg';
import './App.css';
import SynergyButton from './components/SynergyButton'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <SynergyButton></SynergyButton>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Synergy
        </a>
      </header>
    </div>
  );
}

export default App;
