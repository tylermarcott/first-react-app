
// SECTION: components and props

// import React from 'react';
// import './App.css';

// // NOTE: converted function App {} to const App = () => {}    <---- this second one is an arrow function component

// // NOTE: we can create many different components and import them into our larger components

// // new component

// // NOTE: make sure to pass props into the component

// const Person = (props) => {
//   return(
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.LastName}</h2>
//       <h2>Age: {props.age} </h2>
//     </>
//   )
// }



// const App = () => {
//   const name = 'pooboy';

//   // NOTE: can create var isUserLoggedIn. If user is logged in, show a bunch of data, if not, show login button

//   const isUserLoggedIn = true;




//   return (
//     // NOTE: code below is not HTML, it is JSX. JSX allows us to write HTML in React, inside a JS file
//     // differences: classname, not class
//     // in curly braces, we can write any JS expression. eg: src={logo}  <---- dynamically adding the link to logo for the image
//     // can also do <p> {2 + 2} </p> or something like this. This will render 4 on the page

//     // NOTE: !IMPORTANT: PROPS: allow you to pass dynamic data. Props are arguments that you pass into react components. Passed via attributes

//     <div className="App">

//       {/* NOTE: calling the other react component we made above in THIS react component. Can duplicate it however many times */}
//       <Person name={'Jogn'} LastName={'Bilbo'} age={"25"} />
//       <Person name={'Pumb'} LastName={'Plebum'} age={"21"} />
//       <Person name={'Dink'} LastName={'Yarp'} age={"9999"} />

//       <h1>hello</h1>

//       {/* NOTE: this is a react fragment */}
//       {/* NOTE: if you want to render more than 1 element, like our h1 and h2 below, they have to be wrapped in a react fragment. We can do this with a TON of code if we want to, not just a few lines like shown below */}
//       {name ? (<>
//       {name}
//       </>)
//       : (
//         <>
//           <h1>test</h1>
//           <h2>There is no name</h2>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

// !SECTION


// SECTION: react state

import React from 'react';
import './App.css';
// NOTE: to use states, have to import useState hook from react
import { useState } from "react";



// state in react is a plain JS object that is used by react to rep a piece of info about components current situation

const App = () => {

  // NOTE: whenever you call a function and it starts with "use", that is a "hook" in react
  const [counter, setCounter] = useState(0);

  // NOTE: () =>    <--- this is a callback function

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
