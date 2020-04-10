import React from 'react';

const Touchdown = ({ team, score, updateScore }) => {
  const buttonClass = team === 'Home' ? 'homeButtons__touchdown' : 'awayButtons__touchdown';

  return (
    <button onClick={() => updateScore(score + 7)} className={buttonClass}>{`${team} Touchdown`}</button>
  );
}

export default Touchdown;