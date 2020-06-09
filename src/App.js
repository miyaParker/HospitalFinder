import React from 'react';
import './App.css';
import Search from './Search'


function App() {
  const pets = [{ name: "vistru", age: 23 }, { name: "niranjan", age: 51 },
  { name: "asher", age: 7 }, { name: "asher", age: 21 }]
  return (
    <div>
     <Search/>
    </div>
  )
}

export default App;
