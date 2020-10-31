import React from "react";

class Stopwatch extends React.Component {
  tickRef;
  state = {
    isRunning: false
  }
  // Dom(return 안에 있는 태그들)이 랜더링된 직후에 호출
  // REST API 호출, 3rd 라이브러리 로딩
  componentDidMount() {
    this.tickRef = setInterval(() => {}, 1000);
  }

  // Dom이 파괴되기 직전에 호출되는 라이프 사이클 메서드
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }

  getButton = () => {
    if(this.state.isRunning){
      return (
        <button onClick={() => this.setState({isRunning: !this.state.isRunning})}>Stop</button>
      );
    }else{
      return (
        <button onClick={() => this.setState({isRunning: !this.state.isRunning})}>Start</button>
      );
    }
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        {
          this.getButton()
        }
        <button>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;