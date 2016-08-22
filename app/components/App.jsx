import React, { Component } from 'react';

import Settings from './Settings';
import Weather from './Weather';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Weather {...this.props} />
        <Settings {...this.props} />
      </div>
    );
  }
}

export default App;
