import React from 'react';

const FieldGoal = ({team, score, updateScore }) => {
  const buttonClass = team === 'Home' ? 'homeButtons__fieldGoal' : 'awayButtons__fieldGoal';

  return (
    <button onClick={() => updateScore(score + 3)} className={buttonClass}>{`${team} Field Goal`}</button> 
  );
}

export default FieldGoal;