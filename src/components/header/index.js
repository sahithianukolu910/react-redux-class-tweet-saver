import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-header-container">
        <div className="App-header">
          <div>
            <h1>Tweet Saver</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
