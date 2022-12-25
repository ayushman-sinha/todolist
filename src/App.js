import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/body.css';
import Blob from './Blob';
import ListItem from './ListItem';
function App() {
  return (
    <div>
      <div class='main_container'>
        <div class='header'>
          <h1>Todo List</h1>      
          <div class = 'add_button' >
            <input type="text" placeholder="Add a todo" />
            <button>Add</button>        
          </div>
        </div>
        <ListItem /> 
        <ListItem />
        <ListItem />
        <ListItem />

      
      </div>
    </div>
  );
}

export default App;
