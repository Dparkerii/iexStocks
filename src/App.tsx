import * as React from 'react';
import './App.css';
// import ph from './ph.png'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <p className="App-body">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p className="App-nav">
          <h1 className="App-title">David Parker</h1>
          <a href="mailto:drparkerii91@gmail.com">drparkerii91@gmail.com</a>
          <p>Northern Virginia</p>
          <p>703-507-3431</p>
        </p>
      </div>
    );
  }
}

export default App;
