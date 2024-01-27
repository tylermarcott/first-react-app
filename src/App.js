import React from 'react';
import './App.css';

// NOTE: converted function App {} to const App = () => {}    <---- this second one is an arrow function component

const App = () => {
  const name = 'pooboy';
  const test = 'test'
  const isNameShowing = true;




  return (
    // NOTE: code below is not HTML, it is JSX. JSX allows us to write HTML in React, inside a JS file
    // differences: classname, not class
    // in curly braces, we can write any JS expression. eg: src={logo}  <---- dynamically adding the link to logo for the image
    // can also do <p> {2 + 2} </p> or something like this. This will render 4 on the page

    <div className="App">
      <h1>hello</h1>

      {/* NOTE: this is a react fragment */}
      {/* NOTE: if you want to render more than 1 element, like our h1 and h2 below, they have to be wrapped in a react fragment. We can do this with a TON of code if we want to, not just a few lines like shown below */}
      {name ? (<>
      {name}
      </>)
      : (
        <>
          <h1>test</h1>
          <h2>There is no name</h2>
        </>
      )}
    </div>
  );
}

export default App;
