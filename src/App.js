import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { CiMenuBurger } from "react-icons/ci";
import { useState  } from 'react';
function App() {
  return (
    <div className="App">
      <header>Header
        <CiMenuBurger />
      </header>

      <Navbar/>
    </div>
  );
}

export default App;
