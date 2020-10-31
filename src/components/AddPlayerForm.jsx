import React from "react";

class AddPlayerForm extends React.Component {
  render() {
    return (
      <form className="form">
        <input type="text" className="input" placeholder="enter a player's name"/>
        <input type="submit" className="input" value="AddPlayer"/>
      </form>
    );
  }
}

export default AddPlayerForm;