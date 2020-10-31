import React from "react";

class AddPlayerForm extends React.Component {
  state = {
    value : ''
  }

  constructor(props) {
    super(props);
    // createRef()는 클래스 안에서만 사용 가능
    this.formRef = React.createRef();
    this.textRef = React.createRef();
  }

  handleValueChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit');

    // text 노드에 접근하는 방법
    const form = this.formRef.current;
    const player = this.textRef.current;  // documnet.getElementById(id)와 같다.
    console.log(form.checkValidity());    // 폼내의 모든 입력 validation을 체크
    console.log(player.validity.valid);  // 입력의 9가지 validation을 체크

    if(!form.checkValidity()){
      // invalid 폼을 찾아서 에러 문구 표시
      return;
    }

    this.props.addPlayer(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      // form 태그 noValidate :  html5 정규화 사용하지 않음
      // input 태그 required : html5 정규화 사용
      <form ref={this.formRef} className="form" onSubmit={this.handleSubmit} noValidate>
        <input ref={this.textRef} type="text" className="input" required placeholder="enter a player's name"
               value={this.state.value}
               onChange={this.handleValueChange}/>
        <input type="submit" className="input" value="AddPlayer"/>
      </form>
    );
  }
}

export default AddPlayerForm;