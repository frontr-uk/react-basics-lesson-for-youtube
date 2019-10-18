import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from "./todo-item"
function App() {
  const something = {
    color: "#000",
    fontSize: "200px"  
  }
  const example1 = {
    id:  1,
    label: "James Bond",
    location:"london"
  }
  const nums= [example1,example1,example1];
  const list = nums.map((item, index) => <TodoItem key={index} item={example1}/>)

  return (
    <div className="App">
      {list}
      

      <div style={something}>HEllo</div>
      <ul>
        <li><strong>Category</strong> 
        <ul>
          <li>Cli</li>
        </ul>  
      </li></ul>
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
          Learn React lll
        </a>
      </header>
    </div>
  );
}

export default App;
