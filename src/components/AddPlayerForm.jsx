import React from "react";

class AddPlayerForm extends React.Component {
  state = {
    value : ''
  }

  handleValueChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit');
    this.props.addPlayer();
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input type="text" className="input" placeholder="enter a player's name"
               value={this.state.value}
               onChange={this.handleValueChange}/>
        <input type="submit" className="input" value="AddPlayer"/>
      </form>
    );
  }
}

export default AddPlayerForm;