import React from 'react';
import Counter from "./Counter";

function Player({removePlayer, id, name, score, changeScore, children}) {
  return (
    <div className='player'>
      <span className='player-name'>
        <button className='remove-player' onClick={() => removePlayer(id)}>x</button>
        {children}
        {name}
      </span>
      <Counter score={score} changeScore={changeScore} id={id}/>
    </div>
  );
}

export default Player;