import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthProvider from 'auth/AuthProvider';



export const MyComp:React.FC<{px:string}> = ({px}:{px:string} ) => {
    
    return (
    <div>
        <h1>Hello world</h1>
        <h2>  {px} </h2>
    </div>
    )
}

function App() {
  const [t, setT] = useState<number |null>(null)

    useEffect(()=>{
        console.log("use effect is runninng");
    },[t])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React  {t}
        </a>
        <MyComp px='xxx'></MyComp>
        <button onClick={()=>setT(Math.random())}  >change state</button>
      
      </header>
    </div>
  );
}

export default App;
