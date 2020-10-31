import React, {useState} from "react";

function AddPlayerForm(props) {
  const [value, setValue]= useState('');

  const formRef = React.createRef();
  const textRef = React.createRef();

  const handleValueChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // text 노드에 접근하는 방법
    const form = formRef.current;
    const player = textRef.current;  // documnet.getElementById(id)와 같다.
    console.log(form.checkValidity());    // 폼내의 모든 입력 validation을 체크
    console.log(player.validity.valid);  // 입력의 9가지 validation을 체크

    if(!form.checkValidity()){
      // invalid 폼을 찾아서 에러 문구 표시
      return;
    }

    props.addPlayer(value);
    setValue('');
  }

  return (
    // form 태그 noValidate :  html5 정규화 사용하지 않음
    // input 태그 required : html5 정규화 사용
    <form ref={formRef} className="form" onSubmit={handleSubmit} noValidate>
      <input ref={textRef} type="text" className="input" required placeholder="enter a player's name"
             value={value}
             onChange={handleValueChange}/>
      <input type="submit" className="input" value="AddPlayer"/>
    </form>
  );
}

export default AddPlayerForm;