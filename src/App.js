import logo from './logo.svg';
import React from 'react';
import './App.css';


function App() {
  return (

    // NOTE: code below is not HTML, it is JSX. JSX allows us to write HTML in React, inside a JS file
    // differences: classname, not class
    // in curly braces, we can write any JS expression. eg: src={logo}  <---- dynamically adding the link to logo for the image
    // can also do <p> {2 + 2} </p> or something like this.

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
