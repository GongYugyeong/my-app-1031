import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import CustomPlayer from "./components/CustomPlayer";
import _ from 'lodash';

let maxId = 4;    // 임시, 실제로는 DB에서 key값 받아서 넣어줌

function App(props) {
  const [players, setPlayers] = useState([
    {name: 'LDK', score: 0, id: 1},
    {name: 'HONG', score: 0, id: 2},
    {name: 'KIM', score: 0, id: 3},
    {name: 'PARK', score: 0, id: 4},
  ])

  const handleRemovePlayer = (id) => {
    // id를 제외한 상태를 업데이트해야 한다.
    const newPlayers = players.filter((player) => player.id !== id);
    setPlayers(newPlayers);  // 비동기 실행된다.
  }

  const handleChangeScore = (delta, id) => {
    const newPlayers = [ ...players];  // 원본 배열을 새로운 배열로 만듬

    /* 새로운 배열을 돌림 */
    newPlayers.forEach(player => {
      if(player.id === id){
        player.score += delta;
      }
    })
    // short hand property: key와 value가 같으면 한쪽 생략 ex) players: players
    setPlayers(newPlayers);
  }

  const handleAddPlayer = (name) => {
    const newPlayers = [ ...players]
    //추가하는 로직
    newPlayers.push({name: name, score: 0, id: ++maxId});
    setPlayers(newPlayers);
  }

  // 가장 높은 score를 리턴
  const getHighScore = () => {
    const maxObj = _.maxBy(players, 'score');
    return maxObj.score ? maxObj.score : null;
  }

  return (
    <div className='scoreboard'>
      <Header title='My Scoreboard' players={players}/>

      {
        players.map(player => (
          <CustomPlayer name={player.name} key={player.id}
                        id={player.id}
                        score={player.score}
                        isHighScore={player.score === getHighScore()}
                        changeScore={handleChangeScore}
                        removePlayer={handleRemovePlayer} />
        ))
      }
      <AddPlayerForm addPlayer={handleAddPlayer}></AddPlayerForm>
    </div>
  );
}

export default App;
