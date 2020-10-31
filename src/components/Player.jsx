import React from 'react';
import Counter from "./Counter";

function Player({removePlayer, id, name, score, changeScore}) {
  return (
    <div className='player'>
    <span className='player-name'>
        <button className='remove-player' onClick={() => removePlayer(id)}>x</button>
    </span>
      <span className='player-name'>{name}</span>
      <Counter score={score} changeScore={changeScore} id={id}/>
    </div>
  );
}

export default Player;