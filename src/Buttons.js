import React from 'react';
import ScoreButton from './ScoreButton';

const Buttons = ({ homeScore, setHomeScore, awayScore, setAwayScore }) => {
  return (
    <>
      <div className="homeButtons">
        <ScoreButton
          team="Home"
          score={homeScore}
          type="touchdown"
          updateScore={setHomeScore}
        />
        <ScoreButton
          team="Home"
          score={homeScore}
          type="fieldGoal"
          updateScore={setHomeScore}
        />
      </div>
      <div className="awayButtons">
        <ScoreButton
          team="Away"
          score={awayScore}
          type="touchdown"
          updateScore={setAwayScore}
        />
        <ScoreButton
          team="Away"
          score={awayScore}
          type="fieldGoal"
          updateScore={setAwayScore}
        />
      </div>
    </>
  );
}

export default Buttons;