import React, { useState } from 'react';
import './App.css';
import TopRow from './TopRow';
import BottomRow from './BottomRow';
import Buttons from './Buttons';

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  
  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow 
          homeScore={homeScore} 
          awayScore={awayScore} 
        />
        <BottomRow />
      </section>
      <section className="buttons">
        <Buttons 
          homeScore={homeScore}
          awayScore={awayScore}
          setHomeScore={setHomeScore}
          setAwayScore={setAwayScore}
        /> 
      </section>
    </div>
  );
}

export default App;
