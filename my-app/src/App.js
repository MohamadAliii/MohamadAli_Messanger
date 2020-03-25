import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import SignUp from './components/onboard/signUp'
import Login from './components/onboard/login'
import ChatBox from './components/messangar/chatBox.'
import Wellcome from './components/onboard/wellcome'
import conversation from './reducer/conversation'
// import Conversation from './components/messangar/conversation'

const store = createStore (conversation)

function App() {
  return (
    <Provider store={store} >
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Wellcome />
          </Route>
          <Route exact path = '/login'>
            <Login />
          </Route>
          <Route exact path = '/signup'>
            <SignUp />
          </Route>
          <Route exact path = '/chatbox'>
            <ChatBox />
          </Route>
          {/* <Route exact path = '/conv'>
            <Conversation />
          </Route> */}
        </Switch>
      </Router>
    </Provider>
  );
}  
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

export default App;
