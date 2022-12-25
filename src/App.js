import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './css/body.css';
import Blob from './Blob';
import ListItem from './ListItem';
function App() {
  const [listItemArray, setListItemArray] = useState([])
  const [title, setTitle] = useState('')

  const deleteItem = (id) => {
    const tmp = listItemArray.filter((item)=>item.id!=id)
    console.log(tmp)
    setListItemArray(tmp)
  }
  const handleAdd = (e) => {
    const tmp= <ListItem title={title} key={listItemArray.length+1} id={listItemArray.length+1} deleteItem={deleteItem}/>
    setListItemArray([...listItemArray, tmp])
    setTitle('')
  }
  

  return (
    <div>
      <div class='main_container'>
        <div class='header'>
          <h1>Todo List</h1>      
          <div class = 'add_button' >
            <input type="text" placeholder="Add a todo" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>        
          </div>
        </div>
        {listItemArray.map((item,key) =>   
            item
        )}

      
      </div>
    </div>
  );
}

export default App;
