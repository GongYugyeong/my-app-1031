import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import Player from "./components/Player";

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
    ]
  }

  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer: ', id);
    // 로직 작성
    this.setState((prevState) => {
      // id를 제외한 상태를 업데이트해야 한다.
      const players = prevState.players.filter((player) => player.id !== id);
      return { players };
    })
  }

  handleChangeScore = (delta, id) => {
    console.log('handleChangeScore / ' + delta + ' / id / '+ id);
    this.setState((prevState) => {
      const players = [ ...prevState.players];  // 원본 배열을 새로운 배열로 만듬

      /* 새로운 배열을 돌림 */
      players.forEach(player => {
        if(player.id === id){
          player.score += delta;
        }
      })
      return { players }; // short hand property: key와 value가 같으면 한쪽 생략 ex) players: players
    })
  }

  render() {
    return (
      <div className='scoreboard'>
        <Header title='My Scoreboard' players={this.state.players}/>

        {
          this.state.players.map(player => (
            <Player name={player.name} key={player.id}
                    id={player.id}
                    score={player.score}
                    changeScore={this.handleChangeScore}
                    removePlayer={this.handleRemovePlayer} />
          ))
        }
      </div>
    );
  }
}

export default App;