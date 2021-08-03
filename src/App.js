import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {FirstPerson,SecondPerson,PersonSwitcher} from './components'
import './index.css';

const App = () => (
  <BrowserRouter >
    <>
      <PersonSwitcher/>
      <Switch>
        <Route path="/" component={FirstPerson} exact />
        <Route path="/first-person" component={FirstPerson} exact />
        <Route path="/second-person" component={SecondPerson} exact />
      </Switch>
    </>
  </BrowserRouter>
);

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
