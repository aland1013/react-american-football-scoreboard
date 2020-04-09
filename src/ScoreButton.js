import React from 'react';

const ScoreButton = ({team, score, type, updateScore }) => {
  const buttonClass = team === 'Home' ? `homeButtons__${type}` : `awayButtons__${type}`;

  const label = type === 'touchdown' ?
  'Touchdown' : 'Field Goal';

  const points = type === 'touchdown' ? 7 : 3;

  return (
    <button onClick={() => updateScore(score + points)} className={buttonClass}>{`${team} ${label}`}</button>
  );
}

export default ScoreButton;