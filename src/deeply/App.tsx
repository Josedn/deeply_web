import React from 'react';
import './App.scss';
import Home from './pages/home/Home';

const greeting = "    |               |         \n,---|,---.,---.,---.|    ,   .\n|   ||---'|---'|   ||    |   |\n`---'`---'`---'|---'`---'`---|\n               |         `---'\n";
console.log(greeting);

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;