import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="app">
        {this.props.children}
        <div className="footer">
          @author hoga 2016
        </div>
      </div>
    );
  }
}

export default App;
