import React from 'react';
import './App.css';

const Header = (props) => {
  console.log(props);
  // destruct assignment
  const {title, totalPlayers} = props;
  return (
    <header className="header">
      <h1 className="h1">{title}</h1>
      <span className='stats'>Players: {totalPlayers}</span>
    </header>
  );
}

const Player = (props) => (
  <div className='player'>
    <span className='player-name'>
        <button className='remove-player' onClick={() => props.removePlayer(props.id)}>x</button>
    </span>
    <span className='player-name'>{props.name}</span>
    <Counter/>
  </div>
);

class Counter extends React.Component {
  state = {
    score: 0,
    a: 3
  }

  constructor(props) {
    super(props);
    // 1) this.incrementScore = this.incrementScore.bind(this);
  }

  changeScore = (delta) => {
    // 2) arrow 펑션안의 this는 lexical this
    console.log(this);
    // 1. state를 변경하는 방법
    // this.state.score += 1;
    // this.setState({score: this.state.score + 1});
    // 2. merge 된다. : 기존 속성으 그대로 유지
    // 3. 비동기로 처리
    this.setState(prevState => ({
      score: prevState.score + delta
    }));
  }

  render() {
    return (
      <div className='counter'>
        <button className='counter-action decrement'
                onClick={() => this.changeScore(-1)}> -
        </button>
        <span className='counter-score'>{this.state.score}</span>
        <button className='counter-action increment'
                onClick={() => this.changeScore(1)}> +
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4},
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

  render() {
    return (
      <div className='scoreboard'>
        <Header title='My Scoreboard' totalPlayers={11}/>

        {
          this.state.players.map(player => (
            <Player name={player.name} key={player.id} id={player.id}
                    removePlayer={this.handleRemovePlayer} />
          ))
        }
      </div>
    );
  }
}

export default App;