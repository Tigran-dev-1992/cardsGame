import React from 'react';
import AboutGame from './AboutGame';
import Card from './Card';
import CardState from './reducer/CardState';






function App() {
  return (
    <div className="App">
      <CardState>
        <AboutGame/>
        <Card />
      </CardState>
    </div>
  );
}

export default App;
