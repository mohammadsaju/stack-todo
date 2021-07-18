import react, { createContext, useState } from 'react';
import './App.css';
import Counter from './Counter';
import Counterdecrement from './Counter-decrement';
import { useAuth } from './UserAuth';


function App() {
  const {auth, handleAuth} = useAuth();
  return (
    <div className="app">
      {/* <Counter/>
      <Counterdecrement/> */}
      <h1>Is Authenticated ?</h1>
      <strong>{ auth ? "the user is Authenticated" : "please sign up the login form"}</strong><br /><br />
      <button onClick={handleAuth}>sign up</button>
    </div>
  );
}

export default App;