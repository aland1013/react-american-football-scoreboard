import React from 'react';
import Home from './Home';
import Away from './Away';
import Clock from './Clock';

const TopRow = (props) => {
  return (
    <div className="topRow">
      <Home score={props.homeScore} />
      <Clock />
      <Away score={props.awayScore} />
    </div>
  );
}

export default TopRow;